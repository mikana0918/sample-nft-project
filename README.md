## About
sample nft project.
deploy / mint my sample NFTs.

## Reqs
ngrok
eth wallet
alchemyapi account(need API URL)

## Try
```bash
# setup ngrok
./ngrok authtoken


# run dev server (token API) 
cd web && npm run dev

# deploy
node ./scripts/deploy.js

# mint
node ./scripts/mint.js 

# compile
## within ./ethereum directory
npx hardhat compile
```