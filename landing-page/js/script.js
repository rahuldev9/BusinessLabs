const testimonials = [
  {
    text: "This platform completely changed our workflow.",
    name: "Alex Johnson",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },

  {
    text: "Beautiful design and amazing speed.",
    name: "Sarah Smith",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },

  {
    text: "Best landing page starter template.",
    name: "Michael Lee",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
  },

  {
    text: "The UI design is extremely modern and easy to customize.",
    name: "Emma Wilson",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },

  {
    text: "We built our company landing page in just one day using this template.",
    name: "Daniel Brown",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },

  {
    text: "Everything is responsive and looks perfect on mobile devices.",
    name: "Sophia Taylor",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
  },

  {
    text: "This is the best starting point for modern SaaS websites.",
    name: "James Anderson",
    img: "https://randomuser.me/api/portraits/men/90.jpg",
  },

  {
    text: "Very clean code structure and easy to understand.",
    name: "Olivia Martinez",
    img: "https://randomuser.me/api/portraits/women/33.jpg",
  },

  {
    text: "I love the smooth animations and modern layout.",
    name: "William Garcia",
    img: "https://randomuser.me/api/portraits/men/15.jpg",
  },

  {
    text: "Highly recommended for developers building landing pages.",
    name: "Ava Thompson",
    img: "https://randomuser.me/api/portraits/women/51.jpg",
  },
];

let index = 0;

function showTestimonial() {
  document.getElementById("testimonial-text").innerText =
    testimonials[index].text;

  document.getElementById("testimonial-name").innerText =
    "— " + testimonials[index].name;

  document.getElementById("testimonial-img").src = testimonials[index].img;
}

function nextTestimonial() {
  index++;

  if (index >= testimonials.length) {
    index = 0;
  }

  showTestimonial();
}

function prevTestimonial() {
  index--;

  if (index < 0) {
    index = testimonials.length - 1;
  }

  showTestimonial();
}

/* Auto Slide */

setInterval(nextTestimonial, 4000);
