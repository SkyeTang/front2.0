let zIndex = 9999999

export const getIndex = () => zIndex++

export const getDom = (dom)=>{
    if(dom.nodeType === 3){
        dom = dom.nextElementSibling ||  dom.nextSibling
        getDom(dom)
    }
    return dom
}