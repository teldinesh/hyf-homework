// Should translate the circles one at a time
const translateOneByOne = async () => {
    const promise_red = await moveElement(document.querySelector('ul.marks li:nth-child(1)'), { x: 20, y: 300 });
    console.log('Element has been moved', promise_red);
    const promise_blue = await (moveElement(document.querySelector('ul.marks li:nth-child(2)'), { x: 400, y: 300 }));
    console.log('Element has been moved', promise_blue);
    const promise_green = await (moveElement(document.querySelector('ul.marks li:nth-child(3'), { x: 400, y: 20 }));
    console.log('Element has been moved', promise_green);
}
translateOneByOne();