<script lang=ts>
	import { default as Card, CardData } from '$lib/Card.svelte';
	import Cropper from "svelte-easy-crop";
	import { getCroppedImg } from '$lib/canvasUtils.js';
	import { base } from '$app/paths';

	let data = new CardData();

	let image=$state(undefined), fileinput, pixelCrop, croppedImage;

	function onFileSelected(e) {
  	let imageFile = e.target.files[0];
		let reader = new FileReader();
		reader.onload = e => {
			image = e.target.result
		};
		reader.readAsDataURL(imageFile);
	}

	let profilePicture, style;
	let crop = { x: 0, y: 0 }
	let zoom = 1
		
	function previewCrop(e){
		pixelCrop = e.detail.pixels;
		const { x, y, width } = e.detail.pixels;
		const scale = 200 / width;	
		profilePicture.style=`margin: ${-y*scale}px 0 0 ${-x*scale}px; width: ${profilePicture.naturalWidth * scale}px;`
	}
		
	async function cropImage(){
		croppedImage = await getCroppedImg(image, pixelCrop);
		document.dispatchEvent(new Event("cropped"));
	}
		
	function reset() {
		croppedImage = null;
		image = null;
	}


    function save_card(){
		//call the function through the event handlers in the card
		document.dispatchEvent(new Event("save_card"));
	}

	function update(){
		document.dispatchEvent(new Event("update"));
	}
</script>

<div class="app-container">
	<div class="input-container">
		<!-- todo: add more inputs -->
		<p>Name:</p>
		<input bind:value={data.name} onchange={update}/>
		<p>Energy Point Cost:</p>
		<input bind:value={data.energyCost} onchange={update}/>
		<p>Action Point Cost:</p>
		<input bind:value={data.actionPointCost} onchange={update}/>
		<p>Affinity:</p>
		<input bind:value={data.affinity} onchange={update}/>
		<p>Type:</p>
		<select bind:value={data.type} onchange={update}>
			<option>

			</option>
			<option value="Character">
				Character
			</option>
			<option value="Event">
				Event
			</option>
			<option value="Site">
				Site
			</option>
		</select>
		<p>Effect:</p>
		<textarea bind:value={data.effect} oninput={update}/>
		<p>Raid Material:</p>
		<input bind:value={data.raidMaterial} onchange={update}/>
		<p>Raid Effect:</p>
		<textarea bind:value={data.raidEffect} oninput={update}/>
		<p>Trigger</p>
		<select bind:value={data.trigger} onchange={update}>
			<option>

			</option>
			<option value="Get">
				Get
			</option>
			<option value="Draw">
				Draw
			</option>
			<option value="Active">
				Active
			</option>
			<option value="Raid">
				Raid
			</option>
			<option value="Color">
				Color
			</option>
			<option value="Special">
				Special
			</option>
			<option value="Final">
				Final
			</option>
		</select>
		<p>BP:</p>
		<input bind:value={data.battlePoints} onchange={update}/>
		<p>BP+:</p>
		<input type="checkbox" style="max-width: 13px" bind:checked={data.battlePointPlus} onchange={update} />
		<p>Energy Generation:</p>
		<select bind:value={data.energyGeneration} onchange={update}>
			<option>

			</option>
			<option value="1">
				1
			</option>
			<option value="1+">
				1+
			</option>
			<option value="2">
				2
			</option>
			<option value="2+">
				2+
			</option>
			<option value="3">
				3
			</option>
			<option value="3+">
				3+
			</option>
		</select>
		<p>Color:</p>
		<select bind:value={data.color} onchange={update}>
			<option value="purple">
				Purple
			</option>
			<option value="green">
				Green
			</option>
			<option value="yellow">
				Yellow
			</option>
			<option value="blue">
				Blue
			</option>
			<option value="red">
				Red
			</option>
			<option value="white">
				White (yellow)
			</option>
		</select>
		<p>Full Art:</p>
		<input type="checkbox" style="max-width: 13px" bind:checked={data.templateFullArt} onchange={update} />
		<p>Image Upload:</p>
		<input type="file" accept=".jpg, .jpeg, .png" onchange={(e)=>onFileSelected(e)} bind:this={fileinput} >
		
		<!--<button type="button" onclick={async () => cropImage()}>Crop!</button>-->
		<p>Save Card:</p>
		<button onclick={save_card}>Save</button>

	</div>
	<div class="card-container">
		<Card {data} {image} />
	</div>
</div>

<style>
	:global(body) {
		margin: 0px;
	}

    :global(html, body) {
        height: 100%;
    }

	.app-container {
		height: 100%;
		display: flex;
		align-items: stretch;
	}

	.app-container > * {
		height: 100%;
		flex: 1;
	}

	.input-container {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	input {
		width: 20rem;
	}

	textarea {
		width: 20rem;
		resize: none;
		height: 5rem;
	}

	p {
		margin-bottom: 0px;
	}

	.card-container {
		display: flex;
		flex-direction: column;
	}

	.card-container > :global(*) {
		margin: auto;
	}

	.prof-pic-wrapper{
        height: 200px;
        width: 200px;
        position: relative;
        overflow: hidden;
    }
    
    .prof-pic{
        position: absolute;
    }
</style>
