function openModal(memberId) {
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  let memberDetails = "";

  switch (memberId) {
    case "member1":
      memberDetails = `
          <h2>Nguyen Tien Dung</h2>
          <p>Role: Developer and Leader</p>
          <p>Age: 22</p>
          <p>Degree: Bachelor of IT</p>
          <p>Interest: Cloud Computing</p>
        `;
      break;
    case "member2":
      memberDetails = `
          <h2>Member 2</h2>
          <p>Details about Member 2...</p>
        `;
      break;
    case "member3":
      memberDetails = `
          <h2>Member 3</h2>
          <p>Details about Member 3...</p>
        `;
      break;
  }

  modalContent.innerHTML = memberDetails;
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}
