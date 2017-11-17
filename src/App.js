import React from 'react'

function SearchBar(props) {
  return (
    <div>
      <input onChange={props.onSearch} />
    </div>
  )
}

function ListItem(props) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  )
}

class App extends React.Component {
  state = {
    results: ['Item #A', 'Item #B', 'Item #C'],
    searchQuery: null,
  }

  handleSearch = e => {
    var value = e.target.value
    this.setState({ searchQuery: value })
  }

  render() {
    console.log(this.state.searchQuery)
    return (
      <div>
        <SearchBar onSearch={this.handleSearch} />
        {this.state.results
          .filter(item => {
            if (this.state.searchQuery === null) {
              return true
            }
            return item.includes(this.state.searchQuery)
          })
          .map(item => {
            return <ListItem name={item} />
          })}
      </div>
    )
  }
}

export default App
