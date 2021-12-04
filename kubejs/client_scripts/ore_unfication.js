// priority: 0

onEvent('jei.hide.items', event => {
	//Iron dust
	event.hide('immersiveengineering:dust_iron')
	event.hide('mekanism:dust_iron')
	event.hide('pedestals:dustiron')
	event.hide('appliedenergistics2:iron_dust')
	//Iron gear
	event.hide('titanium:iron_gear')
	//Iron plate
	event.hide('immersiveengineering:plate_iron')
	event.hide('create:iron_sheet')
	//Iron rod
	event.hide('immersiveengineering:stick_iron')
	event.hide('buildersaddition:iron_rod')

})