// List disclosure
var selectHead = document.getElementById('customSelect');
var selectList = document.getElementById('customSelectList');
var selectItems = selectList.getElementsByClassName('new-select__item');
var selectedOption = document.getElementById('selectedOption');

selectHead.addEventListener('click', function() {
    selectList.classList.toggle('on');
});

for (const item of selectItems) {
    item.addEventListener('click', function() {
        let chooseItem = item.getAttribute('data-value');
        selectedOption.textContent = item.textContent;
    });
}

// Give the class "active" to the block we are on
const paragraphs = document.querySelectorAll('.content');
let activeParagraph = null;
  
paragraphs.forEach(paragraph => {
    paragraph.addEventListener('click', () => {
  
        if (activeParagraph) {
            activeParagraph.classList.remove('active');
            activeParagraph = null;
        }
  
        paragraphs.forEach(p => p.classList.remove('active'));
        paragraph.classList.add('active');
        activeParagraph = paragraph;
    });
});