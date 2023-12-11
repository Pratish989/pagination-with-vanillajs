

// const itemsPerPage = 3;
// //datacontainer
// const datacontainer =document.getElementById("data-container")
// // previous
// const prev = document.getElementById("prev")
// // next
// const next = document.getElementById("next")
// // pagenumbers
// const pageNumbers = document.getElementById("page-numbers")
// // pagelink
// const pagelink = document.querySelectorAll(".page-link")


// // array.from for iterating over the cards
// const items = Array.from(datacontainer.getElementsByClassName('card'))

// const totalpages = Math.ceil(items.length / itemsPerPage)

// let currentPage = 1 ;

// function displayPage(page){
//  const startindex = (page - 1) * itemsPerPage
//  const endindex = startindex + itemsPerPage;
//  items.forEach((item, index) => { 
//   if (index >= startIndex && index < endIndex) { 
//       item.style.display = 'block'; 
//   } else { 
//       item.style.display = 'none'; 
//   } 
// }); 

// }



// function updatePagination()
// {
//  pageNumbers.textContent = `Page ${cuurentPage} of ${totalpages}`
//  prevButton.disabled = currentPage === 1; 
//     nextButton.disabled = currentPage === totalPages; 
//     pageLinks.forEach((link) => { 
//         const page = parseInt(link.getAttribute('data-page')); 
//         link.classList.toggle('active', page === currentPage); 
//     }); 
// }

// prevButton.addEventListener('click', () => { 
//  if (currentPage > 1) { 
//      currentPage--; 
//      displayPage(currentPage); 
//      updatePagination(); 
//  } 
// }); 


// nextButton.addEventListener('click', () => { 
//  if (currentPage < totalPages) { 
//      currentPage++; 
//      displayPage(currentPage); 
//      updatePagination(); 
//  } 
// });

// pageLinks.forEach((link) => { 
//  link.addEventListener('click', (e) => { 
//      e.preventDefault(); 
//      const page = parseInt(link.getAttribute('data-page')); 
//      if (page !== currentPage) { 
//          currentPage = page; 
//          displayPage(currentPage); 
//          updatePagination(); 
//      } 
//  }); 
// }); 

// // Initial page load 
// displayPage(currentPage); 
// updatePagination();




// // //pagination limit/ items per page  - how many items to  be displayed on the page
// // //pagecount - number of pages depending on the number of items
// // //currentPage - stores the value of curent page

// // // how to calcluate page count? 
// // // - number of items / page limit 
// // - ex- 100 pages and page limit is 10 ==> 100/10 == 10 


const cardsPerPage = 4; 
const dataContainer = document.getElementById('data-container'); 
const pagination = document.getElementById('pagination'); 
const prevButton = document.getElementById('prev'); 
const nextButton = document.getElementById('next'); 
const pageNumbers = document.getElementById('page-numbers'); 
const pageLinks = document.querySelectorAll('.page-link'); 

const cards = 
	Array.from(dataContainer.getElementsByClassName('card')); 

const totalPages = Math.ceil(cards.length / cardsPerPage); 
let currentPage = 1; 

// Function to display cards for a specific page 
function displayPage(page) { 
	const startIndex = (page - 1) * cardsPerPage; 
	const endIndex = startIndex + cardsPerPage; 
	cards.forEach((card, index) => { 
		if (index >= startIndex && index < endIndex) { 
			card.style.display = 'block'; 
		} else { 
			card.style.display = 'none'; 
		} 
	}); 
} 

// Function to update pagination buttons and page numbers 
function updatePagination() { 
	pageNumbers.textContent = 
		`Page ${currentPage} of ${totalPages}`; 
	prevButton.disabled = currentPage === 1; 
	nextButton.disabled = currentPage === totalPages; 
	pageLinks.forEach((link) => { 
		const page = parseInt(link.getAttribute('data-page')); 
		link.classList.toggle('active', page === currentPage); 
	}); 
} 


prevButton.addEventListener('click', () => { 
	if (currentPage > 1) { 
		currentPage--; 
		displayPage(currentPage); 
		updatePagination(); 
	} 
}); 

nextButton.addEventListener('click', () => { 
	if (currentPage < totalPages) { 
		currentPage++; 
		displayPage(currentPage); 
		updatePagination(); 
	} 
}); 


pageLinks.forEach((link) => { 
	link.addEventListener('click', (e) => { 
		e.preventDefault(); 
		const page = parseInt(link.getAttribute('data-page')); 
		if (page !== currentPage) { 
			currentPage = page; 
			displayPage(currentPage); 
			updatePagination(); 
		} 
	}); 
}); 


displayPage(currentPage); 
updatePagination();





