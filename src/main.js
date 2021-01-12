const div = dom.find('#test>.red')[0]
dom.style(div, 'color', 'red')
const divList = dom.find('.red')
dom.each(divList, (n)=> console.log(n))
const div2 =dom.create(`<div>hi</div>`)
dom.append(div,div2)
const span1 = dom.create(`<span></span>`)
dom.after(div2,span1)
const p1 = dom.create('<p></p>')
dom.before(div2,p1)
const section1 = dom.create('<section></section>')
const div4 = dom.create('<div></div>')
dom.append(div,section1)
dom.wrap(div,div4)
dom.remove(section1)
// dom.empty(div4)
console.log(dom.attr(div,'title'))
dom.attr(div,'title','div888')
console.log(dom.text(div2))
dom.text(p1,'para')
console.log(dom.html(div))
dom.html(span1,`<i>i</i>`)
dom.class.add(p1,'blue')
dom.class.remove(p1,'blue')
console.log(dom.class.has(div,'red'))
const fn = ()=>console.log('点击了')
 dom.on(span1,'click',fn)
 dom.off(span1,'click',fn)
 console.log(dom.parent(span1))
 console.log(dom.children(div))
 console.log(dom.siblings(span1))
 console.log(dom.next(p1))
 console.log(dom.previous(span1))
 console.log(dom.index(span1))















