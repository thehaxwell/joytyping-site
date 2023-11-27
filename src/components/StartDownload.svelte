<script>
    import { onMount } from "svelte";

    let urlParams;
    let downloadVersion = "undefined";
    onMount(()=>{
      urlParams = new URLSearchParams(window.location.search);
      downloadVersion = urlParams.get('dv');
      console.log({downloadVersion});
    });
      console.log({downloadVersion});
    console.log("Hello world");
</script>

Starting to download {downloadVersion}
