console.log('hello index')

const url = `http://127.0.0.1:4000/graphql`

async function foo() {
  console.log({ url })
  const query = `
{
  todoCollection {
    edges {
      node {
        id
        complete
        title
      }
    }
  }
}
`
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset="utf-8"',
    },
    body: JSON.stringify(query),
  })
  const json = response.json()
  document.querySelector('main').textContent = JSON.stringify(json)
}

foo()
