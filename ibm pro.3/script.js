document.getElementById('salaryForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const age = parseInt(document.getElementById('age').value);
  const experience = parseInt(document.getElementById('experience').value);
  const gender = document.getElementById('gender').value;
  const city = document.getElementById('city').value;
  const cityType = document.getElementById('cityType').value;
  const qualification = document.getElementById('qualification').value;
  const hours = parseInt(document.getElementById('hours').value);
  const job = document.getElementById('job').value;

  let baseSalary = 200000;
  baseSalary += experience * 20000;
  baseSalary += hours * 500;

  if (qualification === "Master") baseSalary += 100000;
  if (qualification === "PhD") baseSalary += 200000;
  if (cityType === "Metro") baseSalary += 50000;

  if (job === "Product Manager") baseSalary += 300000;
  if (job === "DevOps Engineer") baseSalary += 250000;

  document.getElementById('result').textContent =
    `Estimated Annual Salary: ₹${baseSalary.toLocaleString()}`;
});
