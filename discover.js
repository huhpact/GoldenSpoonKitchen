const recipes = [
  {
          id: 1,
          title: "Authentic Buffalo Chicken Wings",
          description: "True Buffalo-style wings: deep-fried until shatteringly crispy, then tossed in a signature blend of cayenne hot sauce and melted butter.",
          image: "/images/buffalo.png",
          category: "Appetizers",
          link: "/recipes/authentic-buffalo-chicken-wings.html"
        },
   {
          id: 2,
          title: "Authentic Neapolitan Margherita Pizza",
          description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil",
          image: "/images/marg-pizza.png",
          category: "Dinner",
          link: "/recipes/margherita-pizza.html"
        },
				{
				  id: 3,
          title: "Spicy Honey Garlic Shrimp Bowls",
          description: "Succulent shrimp tossed in a sticky, spicy honey garlic glaze, served with fresh broccoli over a bed of jasmine rice.",
          image: "/images/spicy-shrimp.png",
          category: "Dinner",
          link: "/recipes/spicy-honey-garlic-shrimp-bowls.html"
        },
        {
          id: 4,
          title: "Classic Beef Chili Con Carne",
          description: "A robust and savory chili featuring ground beef, red kidney beans, and a complex spice blend, slow-cooked to perfection.",
          image: "/images/chili-con-carne.png",
          category: "Dinner",
          link: "/recipes/classic-beef-chili-con-carne.html"
        },
   {
          id: 5,
          title: "Quinoa Avocado Power Bowl",
          description: "A nourishing, protein-packed bowl with roasted chickpeas, fresh greens, and a creamy lemon-tahini dressing.",
          image: "/images/quinoa.png",
          category: "Breakfast",
          link: "/recipes/quinoa-avocado-power-bowl.html"
        },
  {
          id: 6,
          title: "The Ultimate Brown Butter Chocolate Chip Cookies",
          description: "A gourmet chocolate chip cookie recipe utilizing browned butter and a long cold-fermentation period to produce a rich, complex, and chewy texture.",
          image: "/images/cookies.png",
          category: "Desserts",
          link: "/recipes/ultimate-chocolate-chip-cookies.html"
        },
				{
          id: 7,
          title: "Chocolate Raspberry Opera Cake",
          description: "An elegant French layered cake featuring almond joconde sponge, raspberry syrup, dark chocolate ganache, and raspberry-infused buttercream.",
          image: "/images/opera-cake.png",
          category: "Desserts",
          link: "/recipes/chocolate-raspberry-opera-cake.html"
        },
				{
          id: 8,
          title: "Authentic New York Style Cheesecake",
          description: "A classic, tall, and dense New York cheesecake with a buttery graham cracker crust.",
          image: "/images/cheesecake.png",
          category: "Desserts",
          link: "/recipes/authentic-ny-style-cheesecake.html"
        },
   {
         id: 9,
          title: "Creamy Mushroom Truffle Risotto",
          description: "A sophisticated, restaurant-quality Italian risotto using the authentic Mantecatura technique.",
          image: "/images/risotto.png",
          category: "Dinner",
          link: "/recipes/creamy-mushroom-truffle-risotto.html"
        },
        {
         id: 10,
          title: "Authentic Roman Spaghetti Carbonara",
          description: "A comprehensive guide to the traditional Roman Carbonara using guanciale, pecorino, and eggs. Pure emulsion magic.",
          image: "/images/carbonara.jpg",
          category: "Dinner",
          link: "/recipes/carbonara.html"
        },
         {
         id: 11,
          title: "Creamy Tuscan Chicken",
          description: "Pan-seared chicken breasts smothered in a decadent garlic cream sauce with sun-dried tomatoes and wilted spinach.",
          image: "/images/tuscan-chicken.png",
          category: "Dinner",
          link: "/recipes/creamy-tuscan-chicken.html"
        },
          {
         id: 12,
          title: "Ultimate Lemon Garlic Butter Shrimp Pasta",
          description: "A comprehensive guide to achieving succulent shrimp and a silky, emulsified lemon-garlic butter sauce that coats every strand perfectly.",
          image: "/images/lemon-garlic-shrimp.png",
          category: "Dinner",
          link: "/recipes/lemon-garlic-butter-shrimp-pasta.html"
        },
         {
          id: 13,
          title: "The Ultimate Flaky Apple Pie",
          description: "A classic deep-dish apple pie featuring a double butter crust and a blend of sweet and tart apples seasoned with warm spices.",
          image: "/images/apple-pie.png",
          category: "Desserts",
          link: "/recipes/ultimate-apple-pie.html"
        },
          {
          id: 14,
          title: "The Ultimate Cheeseburger",
          description: "A classic, juicy cheeseburger featuring a hand-formed 80/20 beef patty, melted cheddar, and a signature 'GoldenSpoon' burger sauce",
          image: "/images/cheeseburger.png",
          category: "Dinner",
          link: "/recipes/ultimate-cheeseburger.html"
        },
          {
          id: 15,
          title: "The Traditional Lasagna",
          description: "A legendary Italian-American classic.",
          image: "/images/lasagna.png",
          category: "Dinner",
          link: "/recipes/ultimate-meat-lasagna.html"
        },
          {
          id: 16,
          title: "The Best Baked Mac & Cheese",
          description: "A decadent, creamy baked mac & cheese made with a blend of sharp cheddar and Gruyère cheeses, topped with a crispy breadcrumb crust.",
          image: "/images/mac-cheese.png",
          category: "Dinner",
          link: "/recipes/ultimate-baked-mac-cheese.html"
        },
         {
          id: 17,
          title: "The Crackly-Top Brownies",
          description: "The ultimate fudgy brownies with a signature crackly top, achieved through a precise balance of melted chocolate, brown sugar, and egg whisking technique.",
          image: "/images/brownies.jpeg",
          category: "Desserts",
          link: "/recipes/ultimate-fudgy-brownies.html"
        },
         {
          id: 18,
          title: "Buttermilk Pancakes",
          description: "Fluffy, tender pancakes made with a buttermilk batter for a slight tang and extra moisture.",
          image: "/images/pancakes.png",
          category: "Breakfast",
          link: "/recipes/ultimate-buttermilk-pancakes.html"
        },
        {
          id: 19,
          title: "Crispy Vegetable Samosas",
          description: "Crispy, flaky samosas filled with spiced potatoes and peas, perfect for a quick snack or appetizer.",
          image: "/images/samosas.png",
          category: "Appetizers",
          link: "/recipes/authentic-vegetable-samosas.html"
        },
        {
          id: 20,
          title: "French Onion Soup",
          description: "A traditional French onion soup featuring slow-caramelized onions, rich beef stock, and a melted Gruyère cheese topping.",
          image: "/images/french-onion.png",
          category: "Soups",
          link: "/recipes/french-onion-soup.html"
        },
         {
          id: 21,
          title: "Birria Tacos with Consommé",
          description: "Authentic Mexican birria tacos with a rich, spiced beef consommé for dipping.",
          image: "/images/tacos.jpeg",
          category: "Dinner",
          link: "/recipes/authentic-birria-tacos.html"
        },
         {
          id: 22,
          title: "Chicken Tikka Masala",
          description: "Authentic Indian chicken tikka masala with a rich, creamy tomato sauce.",
          image: "/images/chicken-tikka-masala.jpeg",
          category: "Dinner",
          link: "/recipes/chicken-tikka-masala.html"
        },
        {
          id: 23,
          title: "Buttermilk Fried Chicken",
          description: "The ultimate Southern buttermilk fried chicken with a crispy crust and juicy interior.",
          image: "/images/fried-chicken.jpeg",
          category: "Dinner",
          link: "/recipes/southern-fried-chicken.html"
        }

  
];

const RECIPES_PER_PAGE = 9;

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function setQueryParam(param, value) {
  const url = new URL(window.location);
  url.searchParams.set(param, value);
  window.history.pushState({}, '', url);
}

function renderRecipes(page) {
  const startIndex = (page - 1) * RECIPES_PER_PAGE;
  const endIndex = startIndex + RECIPES_PER_PAGE;
  const recipesToShow = recipes.slice(startIndex, endIndex);

  const container = document.getElementById('recipes-container');
  container.innerHTML = '';

  recipesToShow.forEach(recipe => {
    const recipeCard = document.createElement('a');
    recipeCard.href = recipe.link;
    recipeCard.className = 'discover-recipe-card';

    recipeCard.innerHTML = `
      <div class="recipe-image-wrapper">
        <img src="${recipe.image}" alt="${recipe.title}" />
        <span class="recipe-category-badge">${recipe.category}</span>
      </div>
      <h3 class="recipe-title">${recipe.title}</h3>
      <p class="recipe-description">${recipe.description}</p>
      <span class="recipe-read-btn">Read Now</span>
    `;

    container.appendChild(recipeCard);
  });

  renderPagination(page);

  setTimeout(() => {
    container.querySelectorAll('.discover-recipe-card').forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

        requestAnimationFrame(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        });
      }, index * 100);
    });
  }, 50);
}

function renderPagination(currentPage) {
  const totalPages = Math.ceil(recipes.length / RECIPES_PER_PAGE);
  const paginationContainer = document.getElementById('pagination-container');
  paginationContainer.innerHTML = '';

  const firstBtn = document.createElement('button');
  firstBtn.className = 'pagination-btn';
  firstBtn.textContent = 'First';
  firstBtn.disabled = currentPage === 1;
  firstBtn.onclick = () => changePage(1);
  paginationContainer.appendChild(firstBtn);

  const prevBtn = document.createElement('button');
  prevBtn.className = 'pagination-btn';
  prevBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
    Previous
  `;
  prevBtn.disabled = currentPage === 1;
  prevBtn.onclick = () => changePage(currentPage - 1);
  paginationContainer.appendChild(prevBtn);

  const pageInfo = document.createElement('span');
  pageInfo.className = 'pagination-info';
  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
  paginationContainer.appendChild(pageInfo);

  const nextBtn = document.createElement('button');
  nextBtn.className = 'pagination-btn';
  nextBtn.innerHTML = `
    Next
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  `;
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.onclick = () => changePage(currentPage + 1);
  paginationContainer.appendChild(nextBtn);

  const lastBtn = document.createElement('button');
  lastBtn.className = 'pagination-btn';
  lastBtn.textContent = 'Last';
  lastBtn.disabled = currentPage === totalPages;
  lastBtn.onclick = () => changePage(totalPages);
  paginationContainer.appendChild(lastBtn);
}

function changePage(newPage) {
  setQueryParam('page', newPage);
  renderRecipes(newPage);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
  const currentPage = parseInt(getQueryParam('page')) || 1;
  renderRecipes(currentPage);
});
