document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('curriculum-list');
  const saved = JSON.parse(localStorage.getItem('completedCurriculum') || '{}');

  curriculumData.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'curriculum-item';

    const label = document.createElement('label');
    label.innerHTML = `<strong>${item.title}</strong><br>${item.description} <br><a href="${item.link}" target="_blank">View Resource</a>`;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = !!saved[index];
    checkbox.addEventListener('change', () => {
      saved[index] = checkbox.checked;
      localStorage.setItem('completedCurriculum', JSON.stringify(saved));
    });

    div.appendChild(label);
    div.appendChild(checkbox);
    container.appendChild(div);
  });
});
