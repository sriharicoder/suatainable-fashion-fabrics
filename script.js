document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const fabric = urlParams.get('fabric');

    if (fabric) {
        showDetails(fabric);
    }
});

function showDetails(fabric) {
    const fabricName = document.getElementById('fabric-name');
    const fabricInfo = document.getElementById('fabric-info');
    const fabricImage = document.getElementById('fabric-image');
    const fabricDescription = document.getElementById('fabric-description');

    let info = '';
    let description = '';
    let imageSrc = '';

    switch (fabric) {
        case 'cotton':
            fabricName.innerText = 'Cotton';
            imageSrc = 'cotton.webp';
            description = 'Cotton is one of the most widely used natural fibers in the world. It is soft, breathable, and highly absorbent, making it perfect for clothing, bed linens, and other textiles. Cotton grows in a protective casing around the seeds of the cotton plant and has been cultivated for thousands of years. It is not only comfortable to wear but also durable, making it a popular choice for everyday garments. As a renewable resource, cotton is biodegradable and can be recycled into new fabrics or repurposed for other uses such as cleaning cloths and insulation materials. However, it is water-intensive to produce, making sustainable cotton farming practices crucial for environmental conservation.';
            info = 'Times Limit: 60 uses<br>Days Limit: 250 days<br>Recycled Products: Cleaning rags, stuffing for pillows, quilts, insulation material.';
            break;
        case 'silk':
            fabricName.innerText = 'Silk';
            imageSrc = 'silk.jpeg';
            description = 'Silk is a luxurious natural fiber known for its softness, smooth texture, and elegant sheen. It is produced by silkworms during the process of making their cocoons. Silk is lightweight yet strong, and it drapes beautifully, making it a popular choice for high-end fashion and formalwear. In addition to clothing, silk is used for bedding, scarves, and accessories. It has natural temperature-regulating properties, keeping you cool in warm weather and warm in cool weather. Silk is also hypoallergenic and biodegradable, though it requires special care to maintain its delicate texture. As a premium fabric, silk is both durable and timeless, but it can be more expensive due to the labor-intensive production process.';
            info = 'Times Limit: 40 uses<br>Days Limit: 150 days<br>Recycled Products: Hair accessories, scarves, pillowcases, luxury paper products.';
            break;
        case 'polyester':
            fabricName.innerText = 'Polyester';
            imageSrc = 'polyester.jpeg';
            description = 'Polyester is a strong, wrinkle-resistant synthetic fiber known for its durability and quick-drying properties. Commonly used in clothing and activewear, it resists shrinking and stretching, making it easy to care for. Polyester is also affordable and widely available, making it a popular choice for everyday wear. While not biodegradable, it can be recycled into new fabrics, helping to reduce environmental impact and promoting sustainability in fashion.  However, polyester production relies on fossil fuels, contributing to carbon emissions. Additionally, microplastics from polyester fabrics can enter water systems during washing, posing environmental risks.';
            info = 'Times Limit: 80 uses<br>Days Limit: 300 days<br>Recycled Products: Tote bags, insulation, carpets, fleece fabric for outerwear.';
            break;
        case 'nylon':
            fabricName.innerText = 'Nylon';
            imageSrc = 'nylon.jpeg';
            description = 'Nylon is a versatile synthetic fiber known for its strength, elasticity, and resistance to abrasion. It was initially developed as an alternative to silk and is commonly used in products like stockings, activewear, and outdoor gear. Nylon is lightweight, quick-drying, and highly durable, making it ideal for items that need to withstand wear and tear. However, like other synthetic fibers, nylon is not biodegradable and its production is energy-intensive. Recycling nylon into products like carpets, ropes, and fabric helps reduce waste and the environmental impact of this popular material.';
            info = 'Times Limit: 100 uses<br>Days Limit: 365 days<br>Recycled Products: Ropes, bags, carpets, outdoor furniture material.';
            break;
        case 'linen':
            fabricName.innerText = 'Linen';
            imageSrc = 'linen.jpeg';
            description = 'Linen is a natural fiber made from the flax plant, known for its breathability, strength, and lightweight feel. It’s highly absorbent and dries quickly, making it ideal for warm weather clothing and home textiles like bed sheets and tablecloths. Linen is also eco-friendly, as it requires less water and pesticides to produce compared to other fabrics. It gets softer with each wash, enhancing its comfort over time. Though prone to wrinkling, linen is valued for its durability and timeless, natural texture. Linen is fully biodegradable, making it a sustainable choice in fashion.';
            info = 'Times Limit: 50 uses<br>Days Limit: 200 days<br>Recycled Products: Tea towels, tablecloths, pillow covers, reusable bags.';
            break;
        case 'jersey':
            fabricName.innerText = 'Jersey';
            imageSrc = 'jersey.jpeg';
            description = 'Jersey is a soft, stretchy knit fabric commonly made from cotton, wool, or synthetic fibers like polyester. It is known for its comfort and flexibility, making it a popular choice for t-shirts, loungewear, and sportswear. Jersey fabric is lightweight, breathable, and drapes well on the body, providing a relaxed fit. It’s also easy to care for, as it resists wrinkles and can be machine-washed. Due to its versatility and softness, jersey is a go-to fabric for casual and everyday clothing.';
            info = 'Times Limit: 40 uses<br>Days Limit: 180 days<br>Recycled Products: Rags, cloth wipes, tote bags, quilts.';
            break;
        case 'denim':
            fabricName.innerText = 'Denim';
            imageSrc = 'denim.jpeg';
            description = 'Denim is a durable cotton twill fabric known for its classic blue color and rugged texture. Originally designed for workwear, denim has become a fashion staple worldwide, especially in jeans, jackets, and skirts. It is celebrated for its strength and ability to withstand wear, making it suitable for everyday use. Denim ages beautifully, developing a unique character over time through fading and distressing. Although traditionally made from cotton, denim can also incorporate blends with elastane for added stretch and comfort. Being a versatile fabric, denim can be dressed up or down, making it a timeless choice in fashion.';
            info = 'Times Limit: 100 uses<br>Days Limit: 365 days<br>Recycled Products: Bags, aprons, upholstery, rugs, pillows.';
            break;
        case 'fleece':
            fabricName.innerText = 'Fleece';
            imageSrc = 'fleece.jpeg';
            description = 'Fleece is a soft, warm, and lightweight synthetic fabric, commonly made from polyester. Known for its insulating properties, fleece is often used in jackets, blankets, and outdoor gear, making it an ideal choice for cold weather. The fabric is breathable, moisture-wicking, and dries quickly, providing comfort during various activities. Fleece is also easy to care for, as it can be machine-washed and retains its shape well. While fleece is durable, it is derived from petrochemicals and is not biodegradable. However, many manufacturers are now producing fleece from recycled materials, making it a more sustainable option in the fashion industry.';
            info = 'Times Limit: 80 uses<br>Days Limit: 300 days<br>Recycled Products: Blankets, pet beds, insulation, stuffed toys.';
            break;
        case 'rayon':
            fabricName.innerText = 'Rayon';
            imageSrc = 'rayon.jpeg';
            description = 'Rayon is a semi-synthetic fiber made from regenerated cellulose, typically derived from wood pulp. Known for its soft, silky texture and luxurious drape, rayon is often used in clothing like dresses, blouses, and linings. It is highly absorbent and breathable, making it comfortable to wear in warm weather. Rayon can mimic the feel of natural fibers such as silk, wool, and cotton, providing versatility in fashion. However, it is less durable than other fabrics and may require special care to maintain its appearance. While rayon is biodegradable, its production process can involve harmful chemicals, so choosing eco-friendly brands can help promote sustainability.';
            info = 'Times Limit: 30 uses<br>Days Limit: 120 days<br>Recycled Products: Rags, quilts, pillow stuffing, craft materials.';
            break;
        case 'modal':
            fabricName.innerText = 'Modal';
            imageSrc = 'modal.jpeg';
            description = 'Modal is a type of semi-synthetic fiber made from beech tree pulp. Known for its softness, breathability, and smooth texture, modal is often used in clothing such as dresses, loungewear, and undergarments. It drapes beautifully and feels luxurious against the skin, making it a popular choice for high-quality garments. Modal is highly absorbent, which helps keep you cool and dry, and it resists shrinking and fading, maintaining its vibrant colors over time. Additionally, modal is biodegradable and produced in a more sustainable manner compared to other fabrics, making it an eco-friendly option in the fashion industry.';
            info = 'Times Limit: 50 uses<br>Days Limit: 200 days<br>Recycled Products: Cleaning rags, stuffing for cushions or pillows.';
            break;
        case 'tencel':
            fabricName.innerText = 'Tencel';
            imageSrc = 'tencel.jpeg';
            description = 'Tencel is a brand name for a type of lyocell fiber made from sustainably sourced wood pulp, typically from eucalyptus trees. Renowned for its eco-friendly production process, Tencel is produced in a closed-loop system that recycles water and solvents, minimizing environmental impact. The fabric is incredibly soft, breathable, and moisture-wicking, making it comfortable to wear in various climates. Tencel drapes beautifully and has a luxurious feel, often used in clothing like dresses, shirts, and activewear. Additionally, Tencel is biodegradable and compostable, making it a sustainable choice for those seeking environmentally responsible fashion.';
            info = 'Times Limit: 70 uses<br>Days Limit: 300 days<br>Recycled Products: Cleaning cloths, insulation materials, padding for pillows and cushions.';
            break;
        case 'lycra':
            fabricName.innerText = 'Spandex (Lycra)';
            imageSrc = 'lycra.jpg';
            description = 'Lycra, also known as spandex or elastane, is a synthetic fiber renowned for its exceptional elasticity and stretchability. Often blended with other fabrics, Lycra enhances comfort and flexibility in clothing, making it a popular choice for activewear, swimwear, and form-fitting garments. It allows for ease of movement, retains its shape, and resists wrinkling, making it ideal for both casual and athletic apparel. Although Lycra is not biodegradable, it contributes to the durability of garments, extending their lifespan. Many brands are now focusing on sustainable practices by using recycled Lycra, helping to reduce waste and promote eco-friendly fashion.';
            info = 'Times Limit: 100 uses<br>Days Limit: 365 days<br>Recycled Products: Elastic bands, hair ties, sports gear.';
            break;
        case 'chambray':
            fabricName.innerText = 'Chambray';
            imageSrc = 'chambray.jpeg';
            description = 'Chambray is a lightweight cotton fabric characterized by its plain weave and colored warp yarns, typically blue, which gives it a denim-like appearance. Known for its softness and breathability, chambray is often used in shirts, dresses, and casual wear, making it a versatile choice for both warm and cooler weather. The fabric drapes well and offers a relaxed look, making it suitable for a variety of styles. Unlike denim, chambray is lighter and more comfortable, making it ideal for layering. Chambray is easy to care for and can be machine washed, making it a practical option for everyday fashion.';
            info = 'Times Limit: 60 uses<br>Days Limit: 250 days<br>Recycled Products: Cleaning rags, tote bags, pillow covers.';
            break;
        case 'terrycloth':
            fabricName.innerText = 'Terrycloth';
            imageSrc = 'terrycloth.jpeg';
            description = 'Terrycloth is a highly absorbent fabric made from cotton or a cotton blend, characterized by its looped pile texture on one or both sides. Commonly used in towels, bathrobes, and activewear, terrycloth is known for its softness and ability to absorb moisture, making it ideal for drying off after a shower or swim. Its plush texture provides comfort and warmth, making it a favorite for loungewear and spa garments. Terrycloth is durable and can withstand frequent washing, although it may require extra care to maintain its fluffy texture. Available in various weights and colors, terrycloth combines functionality with comfort, making it a staple in both home and fashion.';
            info = 'Times Limit: 80 uses<br>Days Limit: 300 days<br>Recycled Products: Rags, bath mats, padding for upholstery.';
            break;
        default:
            fabricName.innerText = 'Fabric not found';
            fabricImage.src = '';
            fabricDescription.innerText = 'Sorry, the fabric you are looking for is not found in our database.';
            info = '';
            break;
    }

    fabricImage.src = imageSrc;
    fabricDescription.innerText = description;
    fabricInfo.innerHTML = info;
}
