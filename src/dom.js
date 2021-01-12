window.dom = {
    //dom.create(`<div>hi</div>`)
    create(string){ 
        const container = document.createElement("template")
        container.innerHTML = string.trim()
        return container.content.firstChild
    },
    //dom.after(node,node2)
    after(node,node2){
        node.parentNode.insertBefore(node2,node.nextSibling)
    },
    // dom.before(node,node2)
    before(node,node2){
        node.parentNode.insertBefore(node2,node)
    },
    //dom.append(parent,child)
    append(parent,child){
        parent.appendChild(child)
    },
    //dom.wrap(div)
    wrap(node,parent){
        dom.before(node,parent)
        dom.append(parent,node)
    },
    

    //dom.remove(node)
    remove(node){
        node.parentNode.removeChild(node)
        return node
    },
    //dom.empty(parent)
    empty(node){
        let array = []
        let x = node.firstChild
        while(x){
            array.push(dom.remove(node.firstChild))
            x = node.firstChild
        }
        return array
    },



    //dom.attr(node,'title',?)
    attr(node,name,value){
        if(arguments.length===2){
            return node.getAttribute(name)
        }else if(arguments.length===3){
            node.setAttribute(name,value)
        }
    },
    //dom.text(node,?)
    text(node,string){
        if(arguments.length===2){
            if('innerText' in node){
                node.innerText = string
            }else{
                node.textContent = string
            }
        }else if(arguments.length===1){
            if('innerText' in node){
                return node.innerText
            }else{
                return node.textContent
            }
        }
    },
    //dom.html(node,?)
    html(node,string){
        if(arguments.length===1){
            return node.innerHTML
        }else if(arguments.length===2){
            node.innerHTML = string
        }
    },   
    //dom.style(node,{color: 'red})
    style(node,name,value){
        if(arguments.length===2){
            if(typeof name === 'string'){
                //dom.style(div,'color')
                return node.style[name]
            }else if(name instanceof Object){
                //dom.style(div,{color: 'red'})
                for(let key in name){
                    node.style[key]=name[key]
                }
            }
        }else if(arguments.length===3){
            //dom.style(div,'color','red')
            node.style[name]=value
        }
    },
    //dom.class.add(node,'blue')
    //dom.class.remove(node,'blue')
    //dom.class.has(node,'red')
    class: {
        add(node,className){
            node.classList.add(className)
        },
        remove(node,className){
            node.classList.remove(className)
        },
        has(node,className){
            return node.classList.contains(className)
        }
    },
    //dom.on(node,'click',fn)
    on(node,eventName,fn){
        node.addEventListener(eventName,fn)
    },
    //dom.off(node,'click',fn)
    off(node,eventName,fn){
        node.removeEventListener(eventName,fn)
    },



    //dom.find('选择器‘)
    find(selector,scope){
        return (scope || document).querySelectorAll(selector)
    },
    //dom.parent(node)
    parent(node){
        return node.parentNode
    },
    //dom.children(node)
    children(node){
        return node.children
    },
    //dom.siblings(node)
    siblings(node){
        return Array.from(node.parentNode.children)
        .filter(n => n!==node)
    },
    //dom.next(node)
    next(node){
        let x = node.nextSibling
        while(x&&x.nodeType === 3){
            x = x.nextSibling
        }
        return x
    },
    //dom.previous(node)
    previous(node){
        let x = node.previousSibling
        while(x && x.previousSibling===3){
            x = x.previousSibling
        }
        return x
    },
    //dom.each(node,fn)
    each(nodeList,fn){
        for(let i=0;i<nodeList.length;i++){
            fn.call(null,nodeList[i])
        }
    },
    //dom.index(node)
    index(node){
        const list = dom.children(node.parentNode)
        let i
        for(i=0;i<list.length;i++){
            if(list[i]===node){
                break
            }
        }
        return i
        }
}