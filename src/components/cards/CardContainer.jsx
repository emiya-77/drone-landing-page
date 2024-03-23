import Cards from "./Cards"

const CardContainer = () => {
  return (
    <div className="px-[150px] my-32 w-full">
      <div className="mt-8">
        <h1 className="font-medium uppercase text-5xl mb-4">Explore Products in Different Fields</h1>
        <p className="w-[900px] text-gray-500 mb-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsum pariatur consectetur deserunt accusamus, nulla quo, quibusdam voluptates voluptate eaque cumque eius vel fugiat labore sequi nobis. Ab, quos saepe suscipit culpa minima.</p>
      </div>
      <div className="grid grid-cols-3 gap-x-20">
        <Cards anim="fade-right" title="Video Production" img='https://www.cnet.com/a/img/resize/22243bedeaece498d8d3f2b7d2254df2ac278ea3/hub/2020/11/04/36515bdc-bfe9-499e-99eb-03cfad617999/dji-mini-2-01.jpg?auto=webp&fit=crop&height=576&width=768'></Cards>
        <Cards anim="fade-up" title="Enterprise" img='https://miro.medium.com/v2/da:true/resize:fit:1200/0*xoNbldnILV2GcWJk'></Cards>
        <Cards anim="fade-left" title="Agriculture" img='https://cdn.mos.cms.futurecdn.net/kXUY9hyetVzhZ2scwJP7p3-1200-80.jpg'></Cards>
      </div>
    </div>
  )
}

export default CardContainer