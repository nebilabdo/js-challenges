const prorities=['low','medium','high'];
const boleanStatus=['completed','pending'];
const taskGenerated=Array.from({length:50},(_,index)=>({
    index:index+1,
    title:`Task${index+1}`,
    priority:prorities[Math.floor(Math.random()*prorities.length)],
    status: boleanStatus[Math.floor(Math.random()*2)],
    estimatedTime:Math.floor(Math.random()*100)
}))
// console.log(taskGenerated);
const completedTask=taskGenerated.filter((item)=>item.status==='pending').filter((item)=>item.priority==='high'); console.log(completedTask);
const pendingTask=taskGenerated.filter((item)=>item.status ==='pending');
console.log(pendingTask);
console.log('you did it neba')

const highestProrities=pendingTask.filter((item)=>item.priority ==='high' );
console.log(highestProrities);

const totalEstimatedTime=taskGenerated.reduce((sum,index)=>sum+=index.estimatedTime,10);
console.log(totalEstimatedTime);

const totalCompletedTime=completedTask.reduce((sum,index)=>sum+=index.estimatedTime,10);
console.log(totalCompletedTime);
