import React,{useContext} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const BtnFiltrSlt = observer (() => {
    const {solution} = useContext(Context);

    return (
        <div className="row">
            <div className="col-8 offset-2 d-flex justify-content-between">
                {
                    solution.types.map(type =>
                        <button
                            onClick={()=>solution.setSelectedType(type)}
                            className={type.id === solution.selectedType.id? "btn btn-prim active":"btn btn-prim"}
                            key={type.id}>
                            {type.name}
                        </button>
                    )
                }
            </div>
        </div>
    );
});

export default BtnFiltrSlt;