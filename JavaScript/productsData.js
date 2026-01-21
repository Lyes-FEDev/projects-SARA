//Products data by Lyes MEDJAHED 
// 23/10/2023

const products = [
  {
    id: 1,
    img: ["./MultiMedia/dress.png", "./MultiMedia/productsImgs/dressblack.png"],
    productName: "Dress",
    price: "1023€",
    size: "S | M | L | XL",
    color: [
      { name: "Beige", code: "#E9D484" },
      { name: "Black", code: "#000000" }
    ],
    description: `The Signature Textured Fit-and-Flare Dress
Make a dramatic entrance in this breathtaking dress, designed to command attention. The high halter neck perfectly balances the beautifully voluminous, pleated skirt, creating a classic hourglass shape. What truly sets this piece apart is the fabric—a luxurious material featuring an all-over, raised ornate pattern. This rich texture adds a layer of opulent depth that shifts beautifully in the light, whether you choose the dramatic Black or the sophisticated Beige hue.

Design: Full, Structured Skirt; Fitted Bodice

Feature: High Halter Neckline

Fabric Interest: Richly Textured Surface

Ideal For: Special Occasions, Evening Events`
  },

  {
    id: 2,
    img: ["./MultiMedia/productsImgs/bags/bagbeige.png", "./MultiMedia/productsImgs/bags/bagblack.png", "./MultiMedia/productsImgs/bags/bagbrown.png", "./MultiMedia/productsImgs/bags/bagwhite.png"],
    productName: "Bag",
    price: "998€",
    size: "One size",
    color: [
      { name: "Beige", code: "#eeda8fff" },
      { name: "Black", code: "#000000" },
      { name: "Brown", code: "#654321" },
      { name: "White", code: "#FFFFFF" }
    ],
    description: `👜 Luxury Crocodile-Pattern Leather Handbag | Brown Elegance.

Indulge in timeless sophistication with this brown crocodile-pattern leather handbag, crafted for women who appreciate refinement and confidence. Its sleek silhouette and structured design are enhanced by gold-tone hardware that adds a touch of luxury to any outfit.

The spacious interior keeps your essentials perfectly organized, while the top handle and secure clasp closure ensure both style and practicality. Whether paired with a business look or an evening dress, this bag embodies grace, power, and enduring elegance.

Features:

Premium crocodile-pattern leather texture

Elegant gold-tone hardware and secure clasp closure

Comfortable top handle

Structured design for a polished look

Perfect for both day and evening wear

Dimensions: 28 cm * 22 cm * 12 cm
Material: High-quality PU Leather (croc-embossed finish)
Style: Classic / Luxury`
  },

  {
    id: 3,
    img: ["./MultiMedia/productsImgs/coats/coatbeige.png", "./MultiMedia/productsImgs/coats/coatblack.png", "./MultiMedia/productsImgs/coats/coatbrown.png", "./MultiMedia/productsImgs/coats/coatgrena.png", "./MultiMedia/productsImgs/coats/coatred.png"],
    productName: "Coats",
    price: "1339€",
    size: "S | M | L | XL",
    color: [
      { name: "Beige", code: "#f3df92ff" },
      { name: "Black", code: "#000000" },
      { name: "Brown", code: "#8B4513" },
      { name: "Grena", code: "#800020" },
      { name: "Red", code: "#FF0000" }
    ],
    description: `🧥 Classic Long Wool-Blend Coat | Timeless Beige Elegance

Step into sophistication with this long wool-blend beige coat, designed for modern women who appreciate elegance and confidence. The coat’s tailored silhouette and structured shoulders create a refined look that flatters every figure, while the adjustable belt accentuates the waist for a chic, feminine finish.

Crafted from premium wool-blend fabric, this piece offers exceptional warmth and comfort without compromising on style. Its minimalist design makes it perfect for both professional wear and evening outings, ensuring effortless elegance in every setting.

Features:

Premium wool-blend fabric for warmth and softness

Tailored fit with structured lapels

Adjustable belt for a flattering silhouette

Deep side pockets for convenience

Elegant long design for timeless appeal

Material: 70% Wool, 30% Polyester
Style: Classic / Modern Chic
Occasion: Work, Casual, Evening, Winter`
  },

  {
    id: 4,
    img: ["./MultiMedia/productsImgs/jeans/jeanblue.png", "./MultiMedia/productsImgs/jeans/jeannavy.png", "./MultiMedia/productsImgs/jeans/jeanblack.png"],
    productName: "Jeans",
    price: "123€",
    size: "S | M | L | XL",
    color: [
      { name: "Blue Denim", code: "#1F4E79" },
      { name: "Navy", code: "#000080" },
      { name: "Black", code: "#000000" }
    ],
    description: `👖 High-Waisted Skinny Jeans | Classic Blue Denim

Redefine everyday style with these high-waisted skinny jeans, designed to sculpt your silhouette while ensuring all-day comfort. Crafted from premium stretch denim, they offer a perfect balance of fit, flexibility, and durability, adapting effortlessly to your every move.

Their timeless blue wash makes them a wardrobe essential, pairing seamlessly with anything from casual sneakers to elegant heels. Whether for a relaxed weekend or a night out, these jeans deliver a sleek, flattering look that never goes out of style.

Features:

High-waisted design for a slimming effect

Soft, stretchable premium denim for maximum comfort

Classic five-pocket styling

Durable stitching and metallic button closure

Versatile blue wash suitable for every occasion

Color: Blue Denim
Material: 85% Cotton, 10% Polyester, 5% Elastane
Fit: Skinny / High Waist
Style: Casual / Modern Chic`
  },

  {
    id: 5,
    img: ["./MultiMedia/productsImgs/jewellery/jewellery2.png"],
    productName: "Jewellery",
    price: "1023€",
    size: "One size",
    color: [
      { name: "Golden with Diamond", code: "#D4AF37" }
    ],
    description: `The Fairytale Sparkle Diamond Ensemble
Embrace your inner royalty with the Fairytale Sparkle set, designed to capture the light and the hearts of all who see it. This spectacular ensemble features a diamond-intensive collar necklace, a graceful cinch bracelet, and captivating diamond drop earrings.

The intricate gold-and-diamond lattice flows like liquid light, creating a breathtaking sparkle with every movement. The prominent central pear-shaped drop on the necklace provides a focal point of intense brilliance. Whether worn together for a grand affair or separately to elevate an evening look, this set promises an air of timeless glamour.

Wear it and feel the magic.`
  },

  {
    id: 6,
    img: ["./MultiMedia/productsImgs/shoes/shoesbeige.png", "./MultiMedia/productsImgs/shoes/shoesblack.png", "./MultiMedia/productsImgs/shoes/shoesbrown.png", "./MultiMedia/productsImgs/shoes/shoesgreen.png", "./MultiMedia/productsImgs/shoes/shoesgrena.png"],
    productName: "Shoes",
    price: "775€",
    size: "S | M | L | XL",
    color: [
      { name: "Beige", code: "#eeca94ff" },
      { name: "Black", code: "#000000" },
      { name: "Brown", code: "#873c06ff" },
      { name: "Green", code: "#074107ff" },
      { name: "Grena", code: "#800020" }
    ],
    description: `Got it! To make the description work for multiple colors, I will focus on the material, design, and silhouette.

Here are three versatile descriptions for these sleek, high-shine ankle boots, ready for your e-commerce site:

Option 1: Bold & Modern (Focus on Statement Style)
The Glaze Stiletto Ankle Boot
Step into the spotlight with our most dramatic ankle boot yet. Featuring a striking high-shine, patent finish, these boots are pure confidence. The super-sleek silhouette with a sharp pointed toe and a soaring, thin stiletto heel creates an instantly elongating effect. The stretch-fit shaft ensures a snug contour around the ankle, while the subtle side zipper allows for easy entry. Pair them with a mini-dress or tailored separates for a truly unforgettable look.

Heel: High Stiletto

Toe: Sharp Pointed Toe

Fit: Ankle-High, Sock-fit shaft with Zip Closure

Finish: High-Shine/Patent Look`
  }
];

export default products;
