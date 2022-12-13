const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery')
// images.forEach((image) => {	
// 	const liEl = document.createElement('li');
// 	const imgEl = document.createElement('img');

// 	imgEl.src = `${image.url}`;
// 	imgEl.alt = `${image.alt}`;

// 	gallery.style.maxWidth = '1600px';
// 	gallery.style.display = 'flex';
// 	gallery.style.gap = '20px';
// 	gallery.style.flexWrap = 'wrap';
// 	gallery.style.padding = '0';

// 	liEl.style.listStyle = 'none';
// 	liEl.style.flexBasis = 'calc((100% - 20px * (3 - 1)) / 3)';

// 	imgEl.style.display = 'block';
// 	imgEl.style.height = 'auto';
// 	imgEl.style.maxWidth = '100%';
	
// 	liEl.append(imgEl)
// 	gallery.append(liEl)
// })

const item = images
	.map((image) => `<li><img src=${image.url} alt=${image.alt}></img></li>`).join("");

gallery.insertAdjacentHTML("beforeend", item);
