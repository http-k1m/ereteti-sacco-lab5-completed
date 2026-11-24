const litres = document.querySelector("#litres");
const litresMessage = document.querySelector("#litres-message");

function checkLitres() {
  let amount = Number(litres.value);

  if (litres.value === "") {
    litresMessage.textContent = "";
    litres.classList.remove("invalid");
  } else if (amount <= 0) {
    litresMessage.textContent = "Litres must be more than 0";
    litres.classList.add("invalid");
  } else {
    litresMessage.textContent = "";
    litres.classList.remove("invalid");
  }
}

if (litres) {
  litres.addEventListener("input", checkLitres);
}

const member = document.querySelector("#member");
const memberMessage = document.querySelector("#member-message");
let memberPattern = /^ER-[0-9]{4}$/;

function checkMember() {
  let typed = member.value.trim().toUpperCase();
  member.value = typed;
  if (memberPattern.test(typed)) {
    memberMessage.textContent = "";
    member.classList.remove("invalid");
  } else {
    memberMessage.textContent = "A member number looks like ER-0001";
    member.classList.add("invalid");
  }
}

if (member) {
  member.addEventListener("blur", checkMember);
}

// Lab 5 — routes.php: filter the route sections as the visitor types
const routeSearch = document.querySelector("#route-search");
const routeCount = document.querySelector("#route-count");

function filterRoutes() {
  let words = routeSearch.value.trim().toLowerCase();
  let sections = document.querySelectorAll("main section");
  let shown = 0;

  for (let section of sections) {
    if (section.textContent.toLowerCase().includes(words)) {
      section.hidden = false;
      shown = shown + 1;
    } else {
      section.hidden = true;
    }
  }

  if (words === "") {
    routeCount.textContent = "";
  } else {
    routeCount.textContent = shown + " of " + sections.length + " routes shown";
  }
}

if (routeSearch) {
  routeSearch.addEventListener("input", filterRoutes);
}

// Lab 5 — deliveries.php: total the litres of every accepted row
const acceptedTotal = document.querySelector("#accepted-total");

function totalAccepted() {
  let rows = document.querySelectorAll("tbody tr");
  let total = 0;
  let counted = 0;

  for (let row of rows) {
    let cells = row.querySelectorAll("td");
    if (cells.length === 5) {            // skips the "No deliveries" row
      counted = counted + 1;
      if (cells[4].textContent.trim() === "Yes") {
        total = total + Number(cells[3].textContent);
      }
    }
  }

  if (counted > 0) {
    acceptedTotal.textContent = total.toFixed(2);
  }
}

if (acceptedTotal) {
  totalAccepted();
}
