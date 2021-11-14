  const tdlcDOM = document.querySelector(".to-do-list-container");
  const inputDOM = document.querySelector("#masukkantodolist");
  let gridActive = 1;

  function makeID(length) {
    let result = "";
    let characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * charactersLength)
      );
    }
    return result;
  }

  function changeGridSize() {
    if (gridActive == 1) {
      let cols = document.getElementsByClassName("to-do-list-item");
      for (i = 0; i < cols.length; i++) {
        cols[i].style.width = "100%";
      }
    } else if (gridActive == 2) {
      let cols = document.getElementsByClassName("to-do-list-item");
      for (i = 0; i < cols.length; i++) {
        cols[i].style.width = "49%";
      }
    }
  }
  function barisSatu(e) {
    e.nextElementSibling.classList.remove("button-grid-active");
    e.classList.add("button-grid-active");
    gridActive = 1;
    changeGridSize();
  }
  function barisDua(e) {
    e.previousElementSibling.classList.remove("button-grid-active");
    e.classList.add("button-grid-active");
    gridActive = 2;
    changeGridSize();
  }

  function hapusList(id) {
    var ini = confirm("Apa anda yakin ingin menghapusnya ?")
    if(ini == true){
      document.querySelector(".to-do-list-id-" + id).remove();
    }
    
  }
  function warna1() {
    document.body.style.backgroundColor = "#99FEFF";
  }
  function warna2() {
    document.body.style.backgroundColor = "#FF6D6D";
  }
  function warna3() {
    document.body.style.backgroundColor = "#2FDD92";
  }
  function buatList() {
    if (inputDOM.value == 0) {
      alert("Mohon ketikan to-do-list terlebih dahulu !");
      return;
    }
    let id = makeID(5);
    const newArticle = document.createElement("ARTICLE");
    newArticle.classList.add("to-do-list-item", `to-do-list-id-${id}`);
    newArticle.innerHTML =
      `
          <h2>` +
      inputDOM.value +
      `</h2>
          <button type="button" class="to-do-list-delete" onclick="hapusList('` +
      id +
      `')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            class="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
            />
            <path
              fill-rule="evenodd"
              d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
            />
          </svg>
        </button>
      `;
    tdlcDOM.appendChild(newArticle);
    inputDOM.value = "";
    changeGridSize();
  }