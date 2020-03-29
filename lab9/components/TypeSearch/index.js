import styles from "../Styles.module.css";

class TypeSearch extends React.Component {

  readType(event) {

    event.preventDefault();

    let element = document.querySelector("#type");

    fetch("http://localhost:3000/api/pokemon/type/" + element.value).then((res) => {
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
        <h5 className={styles.header5}>Pokemon Type</h5>
        <form onSubmit={this.readType}>
          <input id="type" type="text" className={styles.input} />
          <br></br>
          <button className={styles.button}>Submit</button>
        </form>
      </div>
    );
  }
}

export default TypeSearch;
