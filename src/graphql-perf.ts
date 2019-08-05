import { graphql, buildSchema } from 'graphql'

function getIntArg(argName: any) {
	const arg = process.argv.find(a => new RegExp(`^${argName}=`).test(a))
	if (arg) {
		return Number.parseInt(arg.split('=')[1], 10)
	}
}

// Test arguments
const args = {
	limit: getIntArg('limit') || 10000,
	async: getIntArg('async') || false,
}

const schema = buildSchema(`
  type Author {
    name: String!
  }
  type Book {
    title: String!
    author: Author!
  }
  type Query {
    books(limit: Int!): [Book!]!
  }
`)

class Author {
	name: string
	constructor(name: string) {
		this.name = name
	}
}

const author = new Author('John Doe')

class Book {
	title: string
	constructor(title: string) {
		this.title = title
	}

	author() {
		if (args.async) {
			return Promise.resolve(author)
		}
		return author
	}
}

const root = {
	books: ({ limit }: { limit: number }) => {
		const books = []
		for (let i = 0; i < limit; i += 1) {
			books.push(new Book(`Book:${i}`))
		}
		return Promise.resolve(books)
	},
}

async function main() {
	const testName = args.async ? 'async resolver' : 'sync resolver'
	console.time(testName)
	await graphql(
		schema,
		`
    {
      books(limit: ${args.limit}) {
        title
        author {
          name
        }
      }
    }
  `,
		root,
	)
	console.timeEnd(testName)
}

main()
