<script lang="ts">
  import { getClient, query } from "svelte-apollo";
  import type {
    GetComponentsQuery,
    GetComponentsQueryVariables,
  } from "../generated/graphql";
  import { getComponents } from '../graphql/skd/query'

  const components = query<GetComponentsQuery, GetComponentsQueryVariables>(
    getClient(),
    { query: getComponents }
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

{#await $components}
  loading..
{:then result}
  <div class="list">
    {#each result.data.components.nodes as comp}
      <div class="item">
        <div>{comp.code}</div>
        <div>{comp.name}</div>
      </div>
    {/each}
  </div>
{:catch err}
  <pre>{JSON.stringify(err, null, 2)}</pre>
{/await}
