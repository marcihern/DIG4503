class NameSearch extends React.Component {

  readName(event) {

    event.preventDefault();

    let element = document.querySelector("#name");

    fetch("http://localhost:3000/api/pokemon/name/" + element.value).then((res) => {
      return res.json();
    }).then((processed) => {

      let reporting = document.querySelector("#reportingArea");

      if(processed.error) {
        reporting.innerHTML = processed.error;
      } else {
        reporting.innerHTML = processed.name;
      }
    });
  }

  render() {
    return(
      <div>
        <h2>Pokemon Name</h2>
        <form onSubmit={this.readName}>
          <input id="name" type="text" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NameSearch;
