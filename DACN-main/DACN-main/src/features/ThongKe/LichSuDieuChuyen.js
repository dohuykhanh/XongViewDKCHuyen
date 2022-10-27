import React from 'react';
import styles from "./LichSuDieuChuyen.module.css"
const LichSuDieuChuyen=() => {
  return (
    <>
      <div className={styles.LichSuDieuChuyenVT}>
    <div className='row'>
                <div className='table-responsive' >
                <h5 style={{color:"#ff2424"}}><b><i>Lưu Vết Vật Tư Điều Chuyển:</i></b></h5>
                    <table className='table table-striped table-hover table-bordered' style={{border:"solid 1px"}}>                      
                        <thead >
                            <tr style={{backgroundColor:"#ffff94"}}>
                                <th>Chi Nhánh</th>
                                <th>Vật Tư Điều Chuyển</th>
                                <th>Ngày Chuyển</th>
                                <th>Chi Tiết</th>
                            </tr>
                        </thead>
                        {/* <tbody>
                            {Manggop.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.hoten}</td>
                                    <td>{item.sdt}</td>
                                    <td>{item.SoLuongHD}</td>
                                  
                                    <td style={{ minWidth: 190 }}>
                                        <Button size='sm' variant='primary' onClick={() => { handleViewShoww();setId(item._id) }}>View</Button>|
                                        <Button size='sm' variant='warning' onClick={()=> {handleEditShow(SetRowData(item),setsdt(item.sdt),sethoten(item.hoten),setId(item._id))}}>Edit</Button>|
                                        <Button size='sm' variant='danger' onClick={() => {handleViewShow(SetRowData(item),setId(item._id), setDelete(true))}}>Delete</Button>|
                                        <Button size='sm' variant='warning' onClick={()=> {handleMoveShow(SetRowData(item),setId(item._id),setsdt(item.sdt),sethoten(item.hoten),setidtb(item._id))}}>Move-To</Button>|
                                    </td>
                                </tr>
                            )}
                        </tbody> */}
                    </table>



                    
                </div>
            </div>
        </div>  
    </>
  );
}

export default LichSuDieuChuyen;
