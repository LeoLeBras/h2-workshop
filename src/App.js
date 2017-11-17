import React from 'react'

function SearchBar() {
  return (
    <div>
      <input
        onChange={function(e) {
          console.log(e.target.value)
        }}
      />
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
    results: ['Item #1', 'Item #2', 'Item #3'],
  }

  handleSearch = function() {
    console.log('handleSearch')
  }

  render() {
    return (
      <div>
        <SearchBar onSearch={this.handleSearch} />
        {this.state.results.map(function(item) {
          return <ListItem name={item} />
        })}
      </div>
    )
  }
}

export default App
