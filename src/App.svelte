<script lang="ts">
  import { setApolloClient } from "./setup";
  const url = "http://localhost:5100/gql";
  setApolloClient(url);

  import Header from "./components/Header.svelte";
  import Components from "./components/Components.svelte";
  import VehiclesInProduction from "./components/VehiclesInProduction.svelte";
</script>

<style>
  .two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .two-col > * {
	  padding: 1rem;
  }
</style>

<Header />
<div class="two-col">
  <div>
    <Components />
  </div>
  <div>
    <VehiclesInProduction />
  </div>
</div>
