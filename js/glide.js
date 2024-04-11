export function initializeCarousel() {
  new Glide('#productCarousel', {
      type: 'carousel',
      perView: 5, // Change perView as needed
      gap: 10, // Adjust gap between slides as needed
      autoplay: 3000, // Adjust autoplay interval as needed (set to 0 to disable)
      hoverpause: true, // Pause autoplay on hover (optional)
      animationDuration: 500, // Adjust animation duration as needed
      breakpoints: {
          768: {
              perView: 2 // Change perView for smaller screens if necessary
          }
      },
      pagination: {
          el: '.glide__bullets',
          clickable: true,
          bullet: '<button class="glide__bullet"></button>'
      }
  }).mount();
}


