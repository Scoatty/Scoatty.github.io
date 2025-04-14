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
		effect = $state("")
		effectFinal1 = $state("")
		effectFinal2 = $state("")
		effectFinal3 = $state("")
		//todo: add Raid Graphic when raid Material != ""
		raidMaterial = $state("")
		raidEffect = $state("")
		raidEffectFinal1 = $state("")
		raidEffectFinal2 = $state("")
		raidEffectFinal3 = $state("")
		trigger = $state("")
		battlePoints = $state("500")
		battlePointPlus = $state(false)
		energyGeneration = $state("")
		color = $state("purple")
		triggerImageFinal = $state("")
		energyImage = $state("")
		raidImage = $state("")
		templateFinal = $state("/purpleTemplate.png")
		templateFullArt = $state(false)
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
	let effectFinal1: HTMLDivElement
	let effectFinal2: HTMLDivElement
	let effectFinal3: HTMLDivElement
	let raidEffectFinal1: HTMLDivElement
	let raidEffectFinal2: HTMLDivElement
	let raidEffectFinal3: HTMLDivElement



	let fileinput, pixelCrop, croppedImage;
	let profilePicture, style;
	let crop = { x: 0, y: 0 }
	let zoom = 1
	
	let div: HTMLDivElement;

	function keywordPlacer(p1: string){
		var temp = p1;
		//replaces text with url to image
		temp = temp.replaceAll("<", "&lt;");
		temp = temp.replaceAll(">", "&gt;");
		temp = temp.replaceAll(":whenplayed:", "<img src=\"/whenPlayed.png\" style=\"vertical-align: bottom;\"/>");
		temp = temp.replaceAll(":whenattacking:", "<img src=\"/whenAttacking.png\" style=\"vertical-align: bottom;\"/>");
		temp = temp.replaceAll(":whenblocking:", "<img src=\"/whenBlocking.png\" style=\"vertical-align: bottom;\"/>");
		temp = temp.replaceAll(":whensidelined:", "<img src=\"/whenSidelined.png\" style=\"vertical-align: bottom;\"/>");
		temp = temp.replaceAll(":duringyourturn:", "<img src=\"/duringYourTurn.png\" style=\"vertical-align: bottom;\"/>");
		temp = temp.replaceAll(":duringopponentsturn:", "<img src=\"/duringOpponentsTurn.png\" style=\"vertical-align: bottom;\"/>");
		temp = temp.replaceAll(":ifonthefrontline:", "<img src=\"/ifOnTheFrontLine.png\" style=\"vertical-align: bottom;\"/>");
		temp = temp.replaceAll(":ifontheenergyline:", "<img src=\"/ifOnTheEnergyLine.png\" style=\"vertical-align: bottom;\"/>");
		temp = temp.replaceAll(":switchtoresting:", "<img src=\"/switchToResting.png\" style=\"vertical-align: bottom;\"/>");
		temp = temp.replaceAll(":place1cardfromhandintothesideline:", "<img src=\"/place1CardFromHandIntoTheSideline.png\" style=\"vertical-align: bottom;\"/>");
		temp = temp.replaceAll(":pay1AP:", "<img src=\"/pay1AP.png\" style=\"vertical-align: bottom;\"/>");
		temp = temp.replaceAll(":sidelinethiscard:", "<img src=\"/sidelineThisCard.png\" style=\"vertical-align: bottom;\"/>");
		temp = temp.replaceAll(":onceperturn:", "<img src=\"/oncePerTurn.png\" style=\"vertical-align: bottom;\"/>");
		temp = temp.replaceAll(":step:", "<img src=\"/step.png\" style=\"vertical-align: bottom;\"/>");
		temp = temp.replaceAll(":snipe:", "<img src=\"/snipe.png\" style=\"vertical-align: bottom;\"/>");
		temp = temp.replaceAll(":doubleattack:", "<img src=\"/doubleAttack.png\" style=\"vertical-align: bottom;\"/>");
		temp = temp.replaceAll(":doubleblock:", "<img src=\"/doubleBlock.png\" style=\"vertical-align: bottom;\"/>");
		temp = temp.replaceAll(":impact1:", "<img src=\"/impact1.png\" style=\"vertical-align: bottom;\"/>");
		temp = temp.replaceAll(":impact+1:", "<img src=\"/impact+1.png\" style=\"vertical-align: bottom;\"/>");
		temp = temp.replaceAll(":damage2:", "<img src=\"/damage2.png\" style=\"vertical-align: bottom;\"/>");
		temp = temp.replaceAll(":damage+1:", "<img src=\"/damage+1.png\" style=\"vertical-align: bottom;\"/>");
		temp = temp.replaceAll(":nullifyimpact:", "<img src=\"/nullifyImpact.png\" style=\"vertical-align: bottom;\"/>");
		temp = temp.replaceAll(":activatemain:", "<img src=\"/activateMain.png\" style=\"vertical-align: bottom;\"/>");
		temp = temp.replaceAll(":onceperturn:", "<img src=\"/oncePerTurn.png\" style=\"vertical-align: bottom;\"/>");
		temp = temp.replaceAll(":redenergy:", "<img src=\"/redEnergy.png\" style=\"vertical-align: bottom;\"/>");
		temp = temp.replaceAll(":blueenergy:", "<img src=\"/blueEnergy.png\" style=\"vertical-align: bottom;\"/>");
		temp = temp.replaceAll(":greenenergy:", "<img src=\"/greenEnergy.png\" style=\"vertical-align: bottom;\"/>");
		temp = temp.replaceAll(":yellowenegery:", "<img src=\"/yellowEnergy.png\" style=\"vertical-align: bottom;\"/>");
		temp = temp.replaceAll(":purpleenergy:", "<img src=\"/purpleEnergy.png\" style=\"vertical-align: bottom;\"/>");

		return temp;
	}

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
		if (data.trigger == "Color" && data.color == "white"){
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
		//updates Template color and full art
		if (data.templateFullArt == false) {
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
			if (data.color == "white") {
				data.templateFinal = "/whiteTemplate.png"
			}
			if (data.color == "") {
				data.templateFinal = ""
			}
		} else {
			if (data.color == "red"){
				data.templateFinal = "/redFullArtTemplate.png"
			}
			if (data.color == "blue"){
				data.templateFinal = "/blueFullArtTemplate.png"
			}
			if (data.color == "yellow"){
				data.templateFinal = "/yellowFullArtTemplate.png"
			}
			if (data.color == "green"){
				data.templateFinal = "/greenFullArtTemplate.png"
			}
			if (data.color == "purple"){
				data.templateFinal = "/purpleFullArtTemplate.png"
			}
			if (data.color == "white"){
				data.templateFinal = "/whiteFullArtTemplate.png"
			}
			if (data.color == "") {
				data.templateFinal = ""
			}
		}
		//updates BP+ checkbox image
		if (data.battlePointPlus == true){
			data.bpCheckImage = "/plus.png"
		}
		else{
			data.bpCheckImage = ""
		}
		//updates Energy or color not selected
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
		//updates Energy (White)
		if (data.energyGeneration == "1" && data.color =="white"){
			data.energyImage = "/whiteEnergy1.png"
		}
		if (data.energyGeneration == "2" && data.color =="white"){
			data.energyImage = "/whiteEnergy2.png"
		}
		if (data.energyGeneration == "3" && data.color =="white"){
			data.energyImage = "/whiteEnergy3.png"
		}
		if (data.energyGeneration == "1+" && data.color =="white"){
			data.energyImage = "/whiteEnergy1+.png"
		}
		if (data.energyGeneration == "2+" && data.color =="white"){
			data.energyImage = "/whiteEnergy2+.png"
		}
		if (data.energyGeneration == "3+" && data.color =="white"){
			data.energyImage = "/whiteEnergy3+.png"
		}
		//updates raidImage if there is a Raid Material
		if (data.raidMaterial != ""){
			data.raidImage = "/raidImage.png"
		}
		else {
			data.raidImage = ""
		}
		//updates Effect text to include pictures
		if (data.effect != "") {
			if (data.templateFullArt == false) {
				effectFinal1.innerHTML = keywordPlacer(data.effect) + "<br>";
			} else if (data.trigger == "") {
				effectFinal3.innerHTML = keywordPlacer(data.effect) + "<br>";
			} else {
				effectFinal2.innerHTML = keywordPlacer(data.effect) + "<br>";
			}
			
		}
		
		//updates raid effect text to include pictures
		if (data.raidEffect != "") {
			var temp = keywordPlacer(data.raidEffect);
			if (data.templateFullArt == false){
				raidEffectFinal1.innerHTML = temp;
			} else if (data.trigger == "") {
				raidEffectFinal3.innerHTML = temp;
			} else {
				raidEffectFinal2.innerHTML = temp;
			}
			
			
			
			console.log(raidEffectFinal1);
			console.log(raidEffectFinal2);
			console.log(raidEffectFinal3);
		}
	}

	function previewCrop(e: { detail: { pixels: { x: any; y: any; width: any; }; }; }){
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
	<div style="top: 50px; left: 51px; width: 30px; font-size: 30px; text-align: center;">{data.energyCost}</div>
    <div style="top: 3rem; left: 105px; width: 430px; font-size: 30px; text-align: center">{data.name}</div>
	<div style="top: 90px; left: 105px; width: 430px; font-size: 15px; text-align: center">{data.affinity}</div>
	<div style="top: 97px; left: 96px; font-size: 25px">{data.actionPointCost}</div>
	{#if data.templateFullArt != true}
		<div style="bottom: 343px; left: 4rem">{data.type}</div>
		<div class="effect">
			{#if data.effect != ""}
				<div style="vertical-align: text-top;" bind:this={effectFinal1}></div>
			{/if}
			
			<div class="raid">
				{#if data.raidMaterial != ""}
					<img src={base+data.raidImage} style="position: absolute; top: -15px; width: 510px; height: 35px; z-index: 6;"/>
					<div style="position: absolute; top: -7px; left: 110px; font-size: 20px; z-index: 7;">&lt;{data.raidMaterial}&gt;</div>
					<div style="position: absolute; top: 5px; left: 4px; width: 495px; border-style: solid; border-width: 1px; border-radius: 5px; z-index: 5; padding: 2px; padding-top: 14px;" bind:this={raidEffectFinal1}></div>
				{/if}
			</div>
		</div>
	{:else}
		{#if data.triggerImageFinal != ""}
			<div class="artEffect">			
				<div class="raid">
					{#if data.raidMaterial != ""}
						<img src={base+data.raidImage} style="position: relative; top: 0px; width: 510px; height: 35px; z-index: 6;"/>
						<div style="position: relative; margin-top: -27px; margin-left: 110px; font-size: 20px; z-index: 7;">&lt;{data.raidMaterial}&gt;</div>
						<div style="position: relative; margin-top: -18px; margin-left: 4px; width: 495px; border-color: white; border-style: solid; border-width: 1px; border-radius: 5px; z-index: 5; padding: 2px; padding-top: 14px;" bind:this={raidEffectFinal2}></div>
					{/if}
				</div>
				{#if data.effect != ""}
					<div style=""bind:this={effectFinal2}></div>
				{/if}
				<div class="typeTag">
					<img src={"/typeTag.png"} style="position: absolute; left: -5px;" />
					<div style="position: absolute; top: 0px; left: 23px">{data.type}</div>
					
				</div>
			</div>
		{:else}
		<div class="artEffect" style="bottom: 85px;">			
			<div class="raid">
				{#if data.raidMaterial != ""}
					<img src={base+data.raidImage} style="position: relative; top: 0px; width: 510px; height: 35px; z-index: 6;"/>
					<div style="position: relative; margin-top: -27px; margin-left: 110px; font-size: 20px; z-index: 7;">&lt;{data.raidMaterial}&gt;</div>
					<div style="position: relative; margin-top: -18px; margin-left: 4px; width: 495px; border-color: white; border-style: solid; border-width: 1px; border-radius: 5px; z-index: 5; padding: 2px; padding-top: 14px;" bind:this={raidEffectFinal3}></div>
				{/if}
			</div>
			{#if data.effect != ""}
				<div style=""bind:this={effectFinal3}></div>
			{/if}
			<div class="typeTag">
				<img src={"/typeTag.png"} style="position: absolute; left: -5px;" />
				<div style="position: absolute; top: 0px; left: 23px">{data.type}</div>
				
			</div>
		</div>
		{/if}
	{/if}
	{#if data.triggerImageFinal != ""}
		<img src={base+data.triggerImageFinal} />	
	{/if}
	{#if data.battlePoints != ""}
		<div style="bottom: 40px; left: 40px; width: 100px; text-align: right; font-size: 30px">{data.battlePoints}</div>
		{#if data.battlePointPlus == true}
			<div style="bottom: 33px; left: 141px; font-size: 45px">+</div>
			<div style="bottom: 40px; left: 168px; font-size: 30px;">BP</div>
		{:else}
			<div style="bottom: 40px; left: 142px; font-size: 30px;">BP</div>
		{/if}
	{/if}
	{#if data.energyImage != ""}
		<img src={base+data.energyImage} />	
	{/if}
	
	{#if data.templateFullArt != true}
		<!-- 112 height 38 width Frame-->
		<div style="top: 22px; left: 0px; width: 600px; height: 554px; z-index: -10; pointer-events: auto;">
			<Cropper
				{image}
				aspect={1}
				zoom = {1}
				minZoom = {.5}
				maxZoom = {5}
				zoomSpeed = {.25}
				crop = {{ x: 0, y: 0 }}
				cropSize = {{width: 527, height: 374}}
				showGrid = {false}
				restrictPosition = {false}
				oncropcomplete={previewCrop}
			/>
		</div>
	{:else}
		<!-- 113 height 39 width-->
		<div style="top: 22px; left: 0px; width: 600px; height: 794px; z-index: -10; pointer-events: auto;">
			<Cropper
				{image}
				aspect={1}
				zoom = {1}
				minZoom = {.5}
				maxZoom = {5}
				zoomSpeed = {.25}
				crop = {{ x: 0, y: 0 }}
				cropSize = {{width: 527, height: 670}}
				showGrid = {false}
				restrictPosition = {false}
				oncropcomplete={previewCrop}
			/>
		</div>
	{/if}

	
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
		word-wrap: normal;
		white-space: pre-wrap;
	}
	
	.artEffect {
		bottom: 150px; 
		left: 41px;  
		width: 515px; 
		height: 190px; 
		display: flex;
		flex-direction: column-reverse;
		word-wrap: normal;
		white-space: pre-wrap;
	}

	.raid {
		position: relative;
		display: flex;
		max-width: 510px;
		flex-wrap: wrap;
	}

	.typeTag {
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
