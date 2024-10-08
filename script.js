// script.js

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

    let info = '';

    switch (fabric) {
        case 'cotton':
            fabricName.innerText = 'Cotton';
            info = 'Times Limit: 60 uses<br>Days Limit: 250 days<br>Recycled Products: Cleaning rags, stuffing for pillows, quilts, insulation material.';
            break;
        case 'silk':
            fabricName.innerText = 'Silk';
            info = 'Times Limit: 40 uses<br>Days Limit: 150 days<br>Recycled Products: Hair accessories, scarves, pillowcases, luxury paper products.';
            break;
        case 'polyester':
            fabricName.innerText = 'Polyester';
            info = 'Times Limit: 80 uses<br>Days Limit: 300 days<br>Recycled Products: Tote bags, insulation, carpets, fleece fabric for outerwear.';
            break;
        case 'nylon':
            fabricName.innerText = 'Nylon';
            info = 'Times Limit: 100 uses<br>Days Limit: 365 days<br>Recycled Products: Ropes, bags, carpets, outdoor furniture material.';
            break;
        case 'linen':
            fabricName.innerText = 'Linen';
            info = 'Times Limit: 50 uses<br>Days Limit: 200 days<br>Recycled Products: Tea towels, tablecloths, pillow covers, reusable bags.';
            break;
        case 'jersey':
            fabricName.innerText = 'Jersey';
            info = 'Times Limit: 40 uses<br>Days Limit: 180 days<br>Recycled Products: Rags, cloth wipes, tote bags, quilts.';
            break;
        case 'denim':
            fabricName.innerText = 'Denim';
            info = 'Times Limit: 100 uses<br>Days Limit: 365 days<br>Recycled Products: Bags, aprons, upholstery, rugs, pillows.';
            break;
        case 'fleece':
            fabricName.innerText = 'Fleece';
            info = 'Times Limit: 80 uses<br>Days Limit: 300 days<br>Recycled Products: Blankets, pet beds, insulation, stuffed toys.';
            break;
        case 'rayon':
            fabricName.innerText = 'Rayon';
            info = 'Times Limit: 30 uses<br>Days Limit: 120 days<br>Recycled Products: Rags, quilts, pillow stuffing, craft materials.';
            break;
        case 'modal':
            fabricName.innerText = 'Modal';
            info = 'Times Limit: 50 uses<br>Days Limit: 200 days<br>Recycled Products: Cleaning rags, stuffing for cushions or pillows.';
            break;
        case 'tencel':
            fabricName.innerText = 'Tencel';
            info = 'Times Limit: 70 uses<br>Days Limit: 300 days<br>Recycled Products: Cleaning cloths, insulation materials, padding for pillows and cushions.';
            break;
        case 'lycra':
            fabricName.innerText = 'Spandex (Lycra)';
            info = 'Times Limit: 100 uses<br>Days Limit: 365 days<br>Recycled Products: Elastic bands, hair ties, sports gear.';
            break;
        case 'chambray':
            fabricName.innerText = 'Chambray';
            info = 'Times Limit: 60 uses<br>Days Limit: 250 days<br>Recycled Products: Cleaning rags, tote bags, pillow covers.';
            break;
        case 'terrycloth':
            fabricName.innerText = 'Terrycloth';
            info = 'Times Limit: 80 uses<br>Days Limit: 300 days<br>Recycled Products: Bath mats, cleaning rags, reusable wipes.';
            break;
        default:
            fabricName.innerText = '';
            info = '';
            break;
    }

    fabricInfo.innerHTML = info; // Use innerHTML to support HTML line breaks
}
