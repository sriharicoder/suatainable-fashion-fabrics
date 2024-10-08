function showDetails(fabric) {
    const fabricName = document.getElementById('fabric-name');
    const fabricInfo = document.getElementById('fabric-info');
    const detailsBox = document.getElementById('details');

    let info = '';

    switch (fabric) {
        case 'cotton':
            fabricName.innerText = 'Cotton';
            info = 'Times Limit: 60 uses\nDays Limit: 250 days\nRecycled Products: Cleaning rags, stuffing for pillows, quilts, insulation material.';
            break;
        case 'silk':
            fabricName.innerText = 'Silk';
            info = 'Times Limit: 40 uses\nDays Limit: 150 days\nRecycled Products: Hair accessories, scarves, pillowcases, luxury paper products.';
            break;
        case 'polyester':
            fabricName.innerText = 'Polyester';
            info = 'Times Limit: 80 uses\nDays Limit: 300 days\nRecycled Products: Tote bags, insulation, carpets, fleece fabric for outerwear.';
            break;
        case 'nylon':
            fabricName.innerText = 'Nylon';
            info = 'Times Limit: 100 uses\nDays Limit: 365 days\nRecycled Products: Ropes, bags, carpets, outdoor furniture material.';
            break;
        case 'linen':
            fabricName.innerText = 'Linen';
            info = 'Times Limit: 50 uses\nDays Limit: 200 days\nRecycled Products: Tea towels, tablecloths, pillow covers, reusable bags.';
            break;
        case 'jersey':
            fabricName.innerText = 'Jersey';
            info = 'Times Limit: 40 uses\nDays Limit: 180 days\nRecycled Products: Rags, cloth wipes, tote bags, quilts.';
            break;
        case 'denim':
            fabricName.innerText = 'Denim';
            info = 'Times Limit: 100 uses\nDays Limit: 365 days\nRecycled Products: Bags, aprons, upholstery, rugs, pillows.';
            break;
        case 'fleece':
            fabricName.innerText = 'Fleece';
            info = 'Times Limit: 80 uses\nDays Limit: 300 days\nRecycled Products: Blankets, pet beds, insulation, stuffed toys.';
            break;
        case 'rayon':
            fabricName.innerText = 'Rayon';
            info = 'Times Limit: 30 uses\nDays Limit: 120 days\nRecycled Products: Rags, quilts, pillow stuffing, craft materials.';
            break;
		case 'modal':
            fabricName.innerText = 'Modal';
            info = 'Times Limit: 50 uses\nDays Limit: 200 days\nRecycled Products: cleaning rags, stuffing for cushions or pillows.';
            break;
		case 'tencel':
            fabricName.innerText = 'Tencel';
            info = 'Times Limit: 70 uses\nDays Limit: 300 days\nRecycled Products:  cleaning cloths, insulation materials, padding for pillows and cushions.';
            break;
		case 'tencel':
            fabricName.innerText = 'Spandex (Lycra)';
            info = 'Times Limit: 100 uses\nDays Limit: 365 days\nRecycled Products:  elastic bands, hair ties, sports gear.';
            break;
		case 'chambray':
            fabricName.innerText = 'Chambray';
            info = 'Times Limit: 60 uses\nDays Limit: 250 days\nRecycled Products:  cleaning rags, tote bags, pillow covers.';
            break;
		case 'terrycloth':
            fabricName.innerText = 'Terrycloth';
            info = 'Times Limit: 80 uses\nDays Limit: 300 days\nRecycled Products:   bath mats, cleaning rags, reusable wipes.';
            break;
        default:
            fabricName.innerText = '';
            info = '';
            break;
    }

    fabricInfo.innerText = info;
    detailsBox.style.display = 'block';
}
