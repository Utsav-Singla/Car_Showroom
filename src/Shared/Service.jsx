
const formatresult = (resp) => {
let result = [];
let finalresult=[];
resp.forEach(item => {
  const lid = item.carListing?.id;
  if(!result[lid])
  {
    result[lid] = {
      car:item.carListing,
      images:[]

    }
  }

  if(item.carImages)
  {
    result[lid].images.push(item.carImages)
  }
});

result.forEach((item)=>{
finalresult.push({
  ...item.car,
  images:item.images
})
})

return finalresult;
}

export default {
   formatresult
  }