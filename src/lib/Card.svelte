<script module lang=ts>
	import { base } from '$app/paths';
	export class CardData {
		// todo: add more fields
		name = $state("default")
		energyCost = $state("0")
		actionPointCost = $state("1")
		affinity = $state("[]")
		type = $state("Character")
		//todo: add Keyword borders to reserved words in effect text
		effect = $state("this card does nothing")
		//todo: add Raid Graphic when raid Material != ""
		raidMaterial = $state("")
		raidEffect = $state("")
		trigger = $state("")
		battlePoints = $state("500")
		battlePointPlus = $state(false)
		energyGeneration = $state("")
		color = $state("")
		triggerImageFinal = $state("")
		energyImage = $state("")
		raidImage = $state("")
		templateFinal = $state("/purpleTemplate.png")
	}
</script>



<script lang=ts>
    import html2canvas from "html2canvas";
	import Cropper from "svelte-easy-crop";
	import { getCroppedImg } from '$lib/canvasUtils.js';


	interface Props {
		data: CardData
		image: any
	}

	let { data, image }: Props = $props();
	let triggerImageFinal
	let templateFinal
	let bpCheckImage
	let energyImage
	let raidImage


	let fileinput, pixelCrop, croppedImage;
	let profilePicture, style;
	let crop = { x: 0, y: 0 }
	let zoom = 1
	
	let div: HTMLDivElement;

	function update(){
		//updates triggerImageFinal.src
		if (data.trigger == "Get"){
			data.triggerImageFinal = "/getTrigger.png"
		}
		if (data.trigger == "Draw"){
			data.triggerImageFinal = "/drawTrigger.png"
		}
		if (data.trigger == "Active"){
			data.triggerImageFinal = "/activeTrigger.png"
		}
		if (data.trigger == "Raid"){
			data.triggerImageFinal = "/raidTrigger.png"
		}
		if (data.trigger == "Special"){
			data.triggerImageFinal = "/specialTrigger.png"
		}
		if (data.trigger == "Final"){
			data.triggerImageFinal = "/finalTrigger.png"
		}
		if (data.trigger == "Color" && data.color == "red"){
			data.triggerImageFinal = "/colorRedTrigger.png"
		}
		if (data.trigger == "Color" && data.color == "blue"){
			data.triggerImageFinal = "/colorBlueTrigger.png"
		}
		if (data.trigger == "Color" && data.color == "yellow"){
			data.triggerImageFinal = "/colorYellowTrigger.png"
		}
		if (data.trigger == "Color" && data.color == "green"){
			data.triggerImageFinal = "/colorGreenTrigger.png"
		}
		if (data.trigger == "Color" && data.color == "purple"){
			data.triggerImageFinal = "/colorPurpleTrigger.png"
		}
		if (data.trigger == ""){
			data.triggerImageFinal = ""
		}
		//updates Template color
		if (data.color == "red"){
			data.templateFinal = "/redTemplate.png"
		}
		if (data.color == "blue"){
			data.templateFinal = "/blueTemplate.png"
		}
		if (data.color == "yellow"){
			data.templateFinal = "/yellowTemplate.png"
		}
		if (data.color == "green"){
			data.templateFinal = "/greenTemplate.png"
		}
		if (data.color == "purple"){
			data.templateFinal = "/purpleTemplate.png"
		}
		//updates BP+ checkbox image
		if (data.battlePointPlus == true){
			data.bpCheckImage = "/plus.png"
		}
		else{
			data.bpCheckImage = ""
		}
		//updatse Energy or color not selected
		if (data.energyGeneration == "" || data.color == "") {
			data.energyImage = ""
		}
		//updates Energy (Green)
		if (data.energyGeneration == "1" && data.color =="green"){
			data.energyImage = "/greenEnergy1.png"
		}
		if (data.energyGeneration == "2" && data.color =="green"){
			data.energyImage = "/greenEnergy2.png"
		}
		if (data.energyGeneration == "3" && data.color =="green"){
			data.energyImage = "/greenEnergy3.png"
		}
		if (data.energyGeneration == "1+" && data.color =="green"){
			data.energyImage = "/greenEnergy1+.png"
		}
		if (data.energyGeneration == "2+" && data.color =="green"){
			data.energyImage = "/greenEnergy2+.png"
		}
		if (data.energyGeneration == "3+" && data.color =="green"){
			data.energyImage = "/greenEnergy3+.png"
		}
		//updates Energy (Purple)
		if (data.energyGeneration == "1" && data.color =="purple"){
			data.energyImage = "/purpleEnergy1.png"
		}
		if (data.energyGeneration == "2" && data.color =="purple"){
			data.energyImage = "/purpleEnergy2.png"
		}
		if (data.energyGeneration == "3" && data.color =="purple"){
			data.energyImage = "/purpleEnergy3.png"
		}
		if (data.energyGeneration == "1+" && data.color =="purple"){
			data.energyImage = "/purpleEnergy1+.png"
		}
		if (data.energyGeneration == "2+" && data.color =="purple"){
			data.energyImage = "/purpleEnergy2+.png"
		}
		if (data.energyGeneration == "3+" && data.color =="purple"){
			data.energyImage = "/purpleEnergy3+.png"
		}
		//updates Energy (Red)
		if (data.energyGeneration == "1" && data.color =="red"){
			data.energyImage = "/redEnergy1.png"
		}
		if (data.energyGeneration == "2" && data.color =="red"){
			data.energyImage = "/redEnergy2.png"
		}
		if (data.energyGeneration == "3" && data.color =="red"){
			data.energyImage = "/redEnergy3.png"
		}
		if (data.energyGeneration == "1+" && data.color =="red"){
			data.energyImage = "/redEnergy1+.png"
		}
		if (data.energyGeneration == "2+" && data.color =="red"){
			data.energyImage = "/redEnergy2+.png"
		}
		if (data.energyGeneration == "3+" && data.color =="red"){
			data.energyImage = "/redEnergy3+.png"
		}
		//updates Energy (Blue)
		if (data.energyGeneration == "1" && data.color =="blue"){
			data.energyImage = "/blueEnergy1.png"
		}
		if (data.energyGeneration == "2" && data.color =="blue"){
			data.energyImage = "/blueEnergy2.png"
		}
		if (data.energyGeneration == "3" && data.color =="blue"){
			data.energyImage = "/blueEnergy3.png"
		}
		if (data.energyGeneration == "1+" && data.color =="blue"){
			data.energyImage = "/blueEnergy1+.png"
		}
		if (data.energyGeneration == "2+" && data.color =="blue"){
			data.energyImage = "/blueEnergy2+.png"
		}
		if (data.energyGeneration == "3+" && data.color =="blue"){
			data.energyImage = "/blueEnergy3+.png"
		}
		//updates Energy (Yellow)
		if (data.energyGeneration == "1" && data.color =="yellow"){
			data.energyImage = "/yellowEnergy1.png"
		}
		if (data.energyGeneration == "2" && data.color =="yellow"){
			data.energyImage = "/yellowEnergy2.png"
		}
		if (data.energyGeneration == "3" && data.color =="yellow"){
			data.energyImage = "/yellowEnergy3.png"
		}
		if (data.energyGeneration == "1+" && data.color =="yellow"){
			data.energyImage = "/yellowEnergy1+.png"
		}
		if (data.energyGeneration == "2+" && data.color =="yellow"){
			data.energyImage = "/yellowEnergy2+.png"
		}
		if (data.energyGeneration == "3+" && data.color =="yellow"){
			data.energyImage = "/yellowEnergy3+.png"
		}
		//updates raidImage if there is a Raid Material
		if (data.raidMaterial != ""){
			data.raidImage = "/raidImage.png"
		}
		else {
			data.raidImage = ""
		}
	}

	function previewCrop(e){
		pixelCrop = e.detail.pixels;
		const { x, y, width } = e.detail.pixels;
		const scale = 200 / width;	
		profilePicture.style=`margin: ${-y*scale}px 0 0 ${-x*scale}px; width: ${profilePicture.naturalWidth * scale}px;`
	}

	function save(){
		html2canvas(div, {
			scale:4
		}).then(c => {
			c.toBlob(b => {
				// @ts-ignore
				var fileURL = window.URL.createObjectURL(b);
				let tab = window.open();
				tab!.location.href = fileURL;
			})
		})
	}
	$effect(() => {
		//Run when component is mounted to the webpage
		document.addEventListener("save_card", save)
		//document.addEventListener("cropped", cropped)
		document.addEventListener("update", update)

		//run when component is removed from webpage
		return () => {document.removeEventListener("save_card", save)
		//return () => document.removeEventListener("cropped", cropped)
		document.removeEventListener("update", update)}
	})

</script>



<div class="card" bind:this={div}>
	<!-- todo: figure out positioning of elements. and make sure that they overflow properly -->
	<!--<div class="image"></div>-->
	<img src={base+data.templateFinal} />
	<div style="top: 51px; left: 56px; font-size: 30px">{data.energyCost}</div>
    <div style="top: 3rem; left: 13rem; width: 200px; font-size: 30px; text-align: center">{data.name}</div>
	<div style="top: 90px; left: 13rem; width: 200px; font-size: 15px; text-align: center">{data.affinity}</div>
	<div style="top: 97px; left: 96px; font-size: 25px">{data.actionPointCost}</div>
	<div style="bottom: 343px; left: 4rem">{data.type}</div>
	<div class="effect">
		{#if data.effect != ""}
			<div style="">{data.effect}<br></div>
		{/if}
		
		<div class="raid">
			{#if data.raidMaterial != ""}
				<img src={base+data.raidImage} style="position: absolute; width: 510px; height: 35px; z-index: 6;"/>
				<div style="position: absolute; top: 8px; left: 110px; font-size: 20px; z-index: 7;">&lt;{data.raidMaterial}&gt;</div>
				<div style="position: absolute; top: 20px; left: 4px; width: 495px; outline: 1px solid; border-radius: 5px; z-index: 5;"><br>{data.raidEffect}</div>
			{/if}
		</div>
	</div>
	<img src={base+data.triggerImageFinal} />
	<div style="bottom: 40px; left: 40px; width: 100px; text-align: right; font-size: 30px">{data.battlePoints}</div>
	{#if data.battlePointPlus == true}
		<div style="bottom: 33px; left: 141px; font-size: 45px">+</div>
		<div style="bottom: 40px; left: 168px; font-size: 30px;">BP</div>
	{:else}
		<div style="bottom: 40px; left: 142px; font-size: 30px;">BP</div>
	{/if}
	
	<img src={base+data.energyImage} />
	<!-- 113 height 39 width-->
	<div style="top: 90px; left: 0px; width: 100%; height: 50%; z-index: -10; pointer-events: auto;">
		<Cropper
			{image}
			aspect={1}
			zoom = {1}
			crop = {{ x: 0, y: 0 }}
			cropSize = {{width: 527, height: 374}}
			showGrid = {false}
			restrictPosition = {false}
			oncropcomplete={previewCrop}
		/>
	</div>
	
</div>



<style>
	.card {
		position: relative;
		/* todo: replace color with card template image */
		/*background-image: url("/UABase.png");
		background-size: 600px;*/
        /* todo: proper aspect ratio of card */
		width: 600px;
		height: 838px;
		transform: scale(1);
		pointer-events: none; 
	}

	.card > * {
		position: absolute;
	}
	.effect {
		bottom: 150px; 
		left: 41px;  
		width: 515px; 
		height: 190px; 
		word-wrap: normal
	}
	
	.raid {
		position: relative;
	}

    div {
        font-family: "DM Sans", serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: Bold;
		color: white;

		text-shadow:
			-1px -1px 0 #000,
			0   -1px 0 #000,
			1px -1px 0 #000,
			1px  0   0 #000,
			1px  1px 0 #000,
			0    1px 0 #000,
			-1px  1px 0 #000,
			-1px  0   0 #000,
			-1px 0px 4px #000, 0px -1px 4px #000, -1px -1px 4px #000, -1px 1px 4px #000,
			-1px 0px 4px #000, 0px -1px 4px #000, -1px -1px 4px #000, -1px 1px 4px #000;

			
    }

</style>
