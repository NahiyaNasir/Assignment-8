
import { toast } from "react-toastify";

export {StoredDataToLocalStorage,StoredDataToLocalStorage2}

const StoredDataToLocalStorage= (details)=>{
    const storageData=JSON.parse(localStorage.getItem ('books')) || []
        // console.log(storageData);
            const savedData= storageData.find(item=> item.bookId === details.bookId )
            if(savedData){
           toast.error('Already exists')
            }else{
                storageData.push(details) 
                localStorage.setItem('books',JSON.stringify(storageData)) 
                toast.success('added')
            }

}

            const StoredDataToLocalStorage2= (details)=>{
                const storageData=JSON.parse(localStorage.getItem ('wish')) || []
                    console.log(storageData);
                        const savedData= storageData.find(item=> item.bookId === details.bookId )
                        if(savedData ){
                       toast.error('Already exists')
                        }else{
                            storageData.push(details) 
                            localStorage.setItem('wish',JSON.stringify(storageData)) 
                            toast.success('added')
                        }
         
}
