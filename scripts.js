document.addEventListener("DOMContentLoaded", function () {
  const uniqueIdForm = document.getElementById("uniqueIdForm");
  const uniqueIdPage = document.getElementById("uniqueIdPage");
  const registrationForm = document.getElementById("registrationForm");
  const formSteps = document.querySelectorAll(".form-step");
  const nextBtns = document.querySelectorAll(".btn-next");
  const prevBtns = document.querySelectorAll(".btn-prev");
  let currentStep = 0;

  // List of valid unique IDs
  const validUniqueIds = [
    "2024/202ZEN/SCVDIKS/001",
    "2024/202ZEN/SCVDIKS/002",
    "2024/202ZEN/SCVDIKS/003",
    "2024/202ZEN/SCVDIKS/004",
    "2024/202ZEN/SCVDIKS/005",
    "2024/202ZEN/SCVDIKS/006",
    "2024/202ZEN/SCVDIKS/007",
    "2024/202ZEN/SCVDIKS/008",
    "2024/202ZEN/SCVDIKS/009",
    "2024/202ZEN/SCVDIKS/010",
    "2024/202ZEN/SCVDIKS/011",
    "2024/202ZEN/SCVDIKS/012",
    "2024/202ZEN/SCVDIKS/013",
    "2024/202ZEN/SCVDIKS/014",
    "2024/202ZEN/SCVDIKS/015",
    "2024/202ZEN/SCVDIKS/016",
    "2024/202ZEN/SCVDIKS/017",
    "2024/202ZEN/SCVDIKS/018",
    "2024/202ZEN/SCVDIKS/019",
    "2024/202ZEN/SCVDIKS/020",
    "2024/202ZEN/SCVDIKS/021",
    "2024/202ZEN/SCVDIKS/022",
    "2024/202ZEN/SCVDIKS/023",
    "2024/202ZEN/SCVDIKS/024",
    "2024/202ZEN/SCVDIKS/025",
    "2024/202ZEN/SCVDIKS/026",
    "2024/202ZEN/SCVDIKS/027",
    "2024/202ZEN/SCVDIKS/028",
    "2024/202ZEN/SCVDIKS/029",
    "2024/202ZEN/SCVDIKS/030",
    "2024/202ZEN/SCVDIKS/031",
    "2024/202ZEN/SCVDIKS/032",
    "2024/202ZEN/SCVDIKS/033",
    "2024/202ZEN/SCVDIKS/034",
    "2024/202ZEN/SCVDIKS/035",
    "2024/202ZEN/SCVDIKS/036",
    "2024/202ZEN/SCVDIKS/037",
    "2024/202ZEN/SCVDIKS/038",
    "2024/202ZEN/SCVDIKS/039",
    "2024/202ZEN/SCVDIKS/040",
    "2024/202ZEN/SCVDIKS/041",
    "2024/202ZEN/SCVDIKS/042",
    "2024/202ZEN/SCVDIKS/043",
    "2024/202ZEN/SCVDIKS/044",
    "2024/202ZEN/SCVDIKS/045",
    "2024/202ZEN/SCVDIKS/046",
    "2024/202ZEN/SCVDIKS/047",
    "2024/202ZEN/SCVDIKS/048",
    "2024/202ZEN/SCVDIKS/049",
    "2024/202ZEN/SCVDIKS/050",
    "2024/202ZEN/SCVDIKS/051",
    "2024/202ZEN/SCVDIKS/052",
    "2024/202ZEN/SCVDIKS/053",
    "2024/202ZEN/SCVDIKS/054",
    "2024/202ZEN/SCVDIKS/055",
    "2024/202ZEN/SCVDIKS/056",
    "2024/202ZEN/SCVDIKS/057",
    "2024/202ZEN/SCVDIKS/058",
    "2024/202ZEN/SCVDIKS/059",
    "2024/202ZEN/SCVDIKS/060",
    "2024/202ZEN/SCVDIKS/061",
    "2024/202ZEN/SCVDIKS/062",
    "2024/202ZEN/SCVDIKS/063",
    "2024/202ZEN/SCVDIKS/064",
    "2024/202ZEN/SCVDIKS/065",
    "2024/202ZEN/SCVDIKS/066",
    "2024/202ZEN/SCVDIKS/067",
    "2024/202ZEN/SCVDIKS/068",
    "2024/202ZEN/SCVDIKS/069",
    "2024/202ZEN/SCVDIKS/070",
    "2024/202ZEN/SCVDIKS/071",
    "2024/202ZEN/SCVDIKS/072",
    "2024/202ZEN/SCVDIKS/073",
    "2024/202ZEN/SCVDIKS/074",
    "2024/202ZEN/SCVDIKS/075",
    "2024/202ZEN/SCVDIKS/076",
    "2024/202ZEN/SCVDIKS/077",
    "2024/202ZEN/SCVDIKS/078",
    "2024/202ZEN/SCVDIKS/079",
    "2024/202ZEN/SCVDIKS/080",
    "2024/202ZEN/SCVDIKS/081",
    "2024/202ZEN/SCVDIKS/082",
    "2024/202ZEN/SCVDIKS/083",
    "2024/202ZEN/SCVDIKS/084",
    "2024/202ZEN/SCVDIKS/085",
    "2024/202ZEN/SCVDIKS/086",
    "2024/202ZEN/SCVDIKS/087",
    "2024/202ZEN/SCVDIKS/088",
    "2024/202ZEN/SCVDIKS/089",
    "2024/202ZEN/SCVDIKS/090",
    "2024/202ZEN/SCVDIKS/091",
    "2024/202ZEN/SCVDIKS/092",
    "2024/202ZEN/SCVDIKS/093",
    "2024/202ZEN/SCVDIKS/094",
    "2024/202ZEN/SCVDIKS/095",
    "2024/202ZEN/SCVDIKS/096",
    "2024/202ZEN/SCVDIKS/097",
    "2024/202ZEN/SCVDIKS/098",
    "2024/202ZEN/SCVDIKS/099",
    "2024/202ZEN/SCVDIKS/100",
    "2024/202ZEN/SCVDIKS/101",
    "2024/202ZEN/SCVDIKS/102",
    "2024/202ZEN/SCVDIKS/103",
    "2024/202ZEN/SCVDIKS/104",
    "2024/202ZEN/SCVDIKS/105",
    "2024/202ZEN/SCVDIKS/106",
    "2024/202ZEN/SCVDIKS/107",
    "2024/202ZEN/SCVDIKS/108",
    "2024/202ZEN/SCVDIKS/109",
    "2024/202ZEN/SCVDIKS/110",
    "2024/202ZEN/SCVDIKS/111",
    "2024/202ZEN/SCVDIKS/112",
    "2024/202ZEN/SCVDIKS/113",
    "2024/202ZEN/SCVDIKS/114",
    "2024/202ZEN/SCVDIKS/115",
    "2024/202ZEN/SCVDIKS/116",
    "2024/202ZEN/SCVDIKS/117",
    "2024/202ZEN/SCVDIKS/118",
    "2024/202ZEN/SCVDIKS/119",
    "2024/202ZEN/SCVDIKS/120",
    "2024/202ZEN/SCVDIKS/121",
    "2024/202ZEN/SCVDIKS/122",
    "2024/202ZEN/SCVDIKS/123",
    "2024/202ZEN/SCVDIKS/124",
    "2024/202ZEN/SCVDIKS/125",
    "2024/202ZEN/SCVDIKS/126",
    "2024/202ZEN/SCVDIKS/127",
    "2024/202ZEN/SCVDIKS/128",
    "2024/202ZEN/SCVDIKS/129",
    "2024/202ZEN/SCVDIKS/130",
    "2024/202ZEN/SCVDIKS/131",
    "2024/202ZEN/SCVDIKS/132",
    "2024/202ZEN/SCVDIKS/133",
    "2024/202ZEN/SCVDIKS/134",
    "2024/202ZEN/SCVDIKS/135",
    "2024/202ZEN/SCVDIKS/136",
    "2024/202ZEN/SCVDIKS/137",
    "2024/202ZEN/SCVDIKS/138",
    "2024/202ZEN/SCVDIKS/139",
    "2024/202ZEN/SCVDIKS/140",
    "2024/202ZEN/SCVDIKS/141",
    "2024/202ZEN/SCVDIKS/142",
    "2024/202ZEN/SCVDIKS/143",
    "2024/202ZEN/SCVDIKS/144",
    "2024/202ZEN/SCVDIKS/145",
    "2024/202ZEN/SCVDIKS/146",
    "2024/202ZEN/SCVDIKS/147",
    "2024/202ZEN/SCVDIKS/148",
    "2024/202ZEN/SCVDIKS/149",
    "2024/202ZEN/SCVDIKS/150",
    "2024/202ZEN/SCVDIKS/151",
    "2024/202ZEN/SCVDIKS/152",
    "2024/202ZEN/SCVDIKS/153",
    "2024/202ZEN/SCVDIKS/154",
    "2024/202ZEN/SCVDIKS/155",
    "2024/202ZEN/SCVDIKS/156",
    "2024/202ZEN/SCVDIKS/157",
    "2024/202ZEN/SCVDIKS/158",
    "2024/202ZEN/SCVDIKS/159",
    "2024/202ZEN/SCVDIKS/160",
    "2024/202ZEN/SCVDIKS/161",
    "2024/202ZEN/SCVDIKS/162",
    "2024/202ZEN/SCVDIKS/163",
    "2024/202ZEN/SCVDIKS/164",
    "2024/202ZEN/SCVDIKS/165",
    "2024/202ZEN/SCVDIKS/166",
    "2024/202ZEN/SCVDIKS/167",
    "2024/202ZEN/SCVDIKS/168",
    "2024/202ZEN/SCVDIKS/169",
    "2024/202ZEN/SCVDIKS/170",
    "2024/202ZEN/SCVDIKS/171",
    "2024/202ZEN/SCVDIKS/172",
    "2024/202ZEN/SCVDIKS/173",
    "2024/202ZEN/SCVDIKS/174",
    "2024/202ZEN/SCVDIKS/175",
    "2024/202ZEN/SCVDIKS/176",
    "2024/202ZEN/SCVDIKS/177",
    "2024/202ZEN/SCVDIKS/178",
    "2024/202ZEN/SCVDIKS/179",
    "2024/202ZEN/SCVDIKS/180",
    "2024/202ZEN/SCVDIKS/181",
    "2024/202ZEN/SCVDIKS/182",
    "2024/202ZEN/SCVDIKS/183",
    "2024/202ZEN/SCVDIKS/184",
    "2024/202ZEN/SCVDIKS/185",
    "2024/202ZEN/SCVDIKS/186",
    "2024/202ZEN/SCVDIKS/187",
    "2024/202ZEN/SCVDIKS/188",
    "2024/202ZEN/SCVDIKS/189",
    "2024/202ZEN/SCVDIKS/190",
    "2024/202ZEN/SCVDIKS/191",
    "2024/202ZEN/SCVDIKS/192",
    "2024/202ZEN/SCVDIKS/193",
    "2024/202ZEN/SCVDIKS/194",
    "2024/202ZEN/SCVDIKS/195",
    "2024/202ZEN/SCVDIKS/196",
    "2024/202ZEN/SCVDIKS/197",
    "2024/202ZEN/SCVDIKS/198",
    "2024/202ZEN/SCVDIKS/199",
    "2024/202ZEN/SCVDIKS/200",
    "2024/202ZEN/SCVDIKS/201",
    "2024/202ZEN/SCVDIKS/202",
    "2024/202ZEN/SCVDIKS/203",
    "2024/202ZEN/SCVDIKS/204",
    "2024/202ZEN/SCVDIKS/205",
    "2024/202ZEN/SCVDIKS/206",
    "2024/202ZEN/SCVDIKS/207",
    "2024/202ZEN/SCVDIKS/208",
    "2024/202ZEN/SCVDIKS/209",
    "2024/202ZEN/SCVDIKS/210",
    "2024/202ZEN/SCVDIKS/211",
    "2024/202ZEN/SCVDIKS/212",
    "2024/202ZEN/SCVDIKS/213",
    "2024/202ZEN/SCVDIKS/214",
    "2024/202ZEN/SCVDIKS/215",
    "2024/202ZEN/SCVDIKS/216",
    "2024/202ZEN/SCVDIKS/217",
    "2024/202ZEN/SCVDIKS/218",
    "2024/202ZEN/SCVDIKS/219",
    "2024/202ZEN/SCVDIKS/220",
    "2024/202ZEN/SCVDIKS/221",
    "2024/202ZEN/SCVDIKS/222",
    "2024/202ZEN/SCVDIKS/223",
    "2024/202ZEN/SCVDIKS/224",
    "2024/202ZEN/SCVDIKS/225",
    "2024/202ZEN/SCVDIKS/226",
    "2024/202ZEN/SCVDIKS/227",
    "2024/202ZEN/SCVDIKS/228",
    "2024/202ZEN/SCVDIKS/229",
    "2024/202ZEN/SCVDIKS/230",
    "2024/202ZEN/SCVDIKS/231",
    "2024/202ZEN/SCVDIKS/232",
    "2024/202ZEN/SCVDIKS/233",
    "2024/202ZEN/SCVDIKS/234",
    "2024/202ZEN/SCVDIKS/235",
    "2024/202ZEN/SCVDIKS/236",
    "2024/202ZEN/SCVDIKS/237",
    "2024/202ZEN/SCVDIKS/238",
    "2024/202ZEN/SCVDIKS/239",
    "2024/202ZEN/SCVDIKS/240",
    "2024/202ZEN/SCVDIKS/241",
    "2024/202ZEN/SCVDIKS/242",
    "2024/202ZEN/SCVDIKS/243",
    "2024/202ZEN/SCVDIKS/244",
    "2024/202ZEN/SCVDIKS/245",
    "2024/202ZEN/SCVDIKS/246",
    "2024/202ZEN/SCVDIKS/247",
    "2024/202ZEN/SCVDIKS/248",
    "2024/202ZEN/SCVDIKS/249",
    "2024/202ZEN/SCVDIKS/250",
    "2024/202ZEN/SCVDIKS/251",
    "2024/202ZEN/SCVDIKS/252",
    "2024/202ZEN/SCVDIKS/253",
    "2024/202ZEN/SCVDIKS/254",
    "2024/202ZEN/SCVDIKS/255",
    "2024/202ZEN/SCVDIKS/256",
    "2024/202ZEN/SCVDIKS/257",
    "2024/202ZEN/SCVDIKS/258",
    "2024/202ZEN/SCVDIKS/259",
    "2024/202ZEN/SCVDIKS/260",
    "2024/202ZEN/SCVDIKS/261",
    "2024/202ZEN/SCVDIKS/262",
    "2024/202ZEN/SCVDIKS/263",
    "2024/202ZEN/SCVDIKS/264",
    "2024/202ZEN/SCVDIKS/265",
    "2024/202ZEN/SCVDIKS/266",
    "2024/202ZEN/SCVDIKS/267",
    "2024/202ZEN/SCVDIKS/268",
    "2024/202ZEN/SCVDIKS/269",
    "2024/202ZEN/SCVDIKS/270",
    "2024/202ZEN/SCVDIKS/271",
    "2024/202ZEN/SCVDIKS/272",
    "2024/202ZEN/SCVDIKS/273",
    "2024/202ZEN/SCVDIKS/274",
    "2024/202ZEN/SCVDIKS/275",
    "2024/202ZEN/SCVDIKS/276",
    "2024/202ZEN/SCVDIKS/277",
    "2024/202ZEN/SCVDIKS/278",
    "2024/202ZEN/SCVDIKS/279",
    "2024/202ZEN/SCVDIKS/280",
    "2024/202ZEN/SCVDIKS/281",
    "2024/202ZEN/SCVDIKS/282",
    "2024/202ZEN/SCVDIKS/283",
    "2024/202ZEN/SCVDIKS/284",
    "2024/202ZEN/SCVDIKS/285",
    "2024/202ZEN/SCVDIKS/286",
    "2024/202ZEN/SCVDIKS/287",
    "2024/202ZEN/SCVDIKS/288",
    "2024/202ZEN/SCVDIKS/289",
    "2024/202ZEN/SCVDIKS/290",
    "2024/202ZEN/SCVDIKS/291",
    "2024/202ZEN/SCVDIKS/292",
    "2024/202ZEN/SCVDIKS/293",
    "2024/202ZEN/SCVDIKS/294",
    "2024/202ZEN/SCVDIKS/295",
    "2024/202ZEN/SCVDIKS/296",
    "2024/202ZEN/SCVDIKS/297",
    "2024/202ZEN/SCVDIKS/298",
    "2024/202ZEN/SCVDIKS/299",
    "2024/202ZEN/SCVDIKS/300",
    "2024/202ZEN/SCVDIKS/301",
    "2024/202ZEN/SCVDIKS/302",
    "2024/202ZEN/SCVDIKS/303",
    "2024/202ZEN/SCVDIKS/304",
    "2024/202ZEN/SCVDIKS/305",
    "2024/202ZEN/SCVDIKS/306",
    "2024/202ZEN/SCVDIKS/307",

    // Add more IDs as needed
  ];

  // Handle Unique ID form submission
  uniqueIdForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const uniqueIdInput = document.getElementById("uniqueId").value;

    // Check if the entered unique ID is valid
    if (validUniqueIds.includes(uniqueIdInput)) {
      uniqueIdPage.style.display = "none";
      registrationForm.style.display = "block";
      formSteps[0].classList.add("active"); // Show the Personal Details form step
    } else {
      alert("Invalid Unique ID. Please enter a valid Unique ID to proceed.");
    }
  });

  // Handle "Next" button clicks
  nextBtns.forEach((button) => {
    button.addEventListener("click", () => {
      formSteps[currentStep].classList.remove("active");
      currentStep++;
      formSteps[currentStep].classList.add("active");
    });
  });

  // Handle "Previous" button clicks
  prevBtns.forEach((button) => {
    button.addEventListener("click", () => {
      formSteps[currentStep].classList.remove("active");
      currentStep--;
      formSteps[currentStep].classList.add("active");
    });
  });
});
