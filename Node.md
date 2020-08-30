```
npm install -D @graphql-codegen/cli
npm install -D @graphql-codegen/typescript
npm install -D @graphql-codegen/typescript-operations
```

codegen.yml
```yml
overwrite: true
schema: "http://localhost:5100/gql/"
documents: "src/**/*.graphql"
generates:
  src/generated/graphql.ts:
    plugins:
      - "typescript"
      - "typescript-operations"

```

pacakge.json script

```json
{ 
    "scripts: {
        "generate": "graphql-codegen --config codegen.yml"
    }
}
```
