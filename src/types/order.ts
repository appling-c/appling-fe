export default interface orderSellerStatus {
  ORDERED: "주문완료";
  PROCESSING: "주문확인";
  CONFIRM: "배송완료";
  CANCEL: "주문취소";
}

export default interface orderMemberStatus {
  ORDERED: "주문완료";
  PROCESSING: "상품준비중";
  CONFIRM: "발송완료";
  CANCEL: "주문취소";
}
