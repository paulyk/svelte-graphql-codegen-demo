<script lang="ts">
    import { getClient, query } from "svelte-apollo";
    import type {
      GetVehicleInProductionQuery,
      GetVehicleInProductionQueryVariables,
    } from "../generated/graphql";
    import { getVehicleInProduction } from '../graphql/skd/query'
  
    const queryStream = query<GetVehicleInProductionQuery, GetVehicleInProductionQueryVariables>(
      getClient(),
      { query: getVehicleInProduction }
    );
  </script>
  
  <style>
    .list {
      display: grid;
      grid-gap: 1rem;
    }
  
    .item {
      padding: 0.5rem 1rem;
      background: #efefef;
    }
  </style>
  
  {#await $queryStream}
    loading..
  {:then result}
    <div class="list">
      {#each result.data.vehicles.nodes as vehicle}
        <div class="item">
          <div>{vehicle.vin}</div>
          <div>{vehicle.model.name}</div>
        </div>
      {/each}
    </div>
  {:catch err}
    <pre>{JSON.stringify(err, null, 2)}</pre>
  {/await}
  