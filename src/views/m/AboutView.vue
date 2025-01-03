<template>
  <div class="mbodyListBox p-3">
    <div class="mbodyListRow">
      <div class="mbodyListLeft"><img src="../../assets/logo3.png"></div>
      <div class="mbodyListRight">Lv.50 10000000000000</div>
    </div>
    <div class="mbodyListLine">帳號名稱</div>
    <div class="mbodyListRow">
      <div class="mbodyListBox p-3">
        <button class="btn btn-primary">公會</button>
        <button class="btn btn-primary">好友</button>
        <button class="btn btn-primary">儲值</button>
      </div>
      <div class="mbodyListRight">角色</div>
      <div class="mbodyListBox p-3">
        <button class="btn btn-primary">銀行</button>
        <button class="btn btn-primary">衣櫃</button>
        <button class="btn btn-primary">商店</button>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

.mbodyListBox {
  display: flex;
  flex-direction:column;
  gap:1rem;
}

.mbodyListBox .mbodyListRow {
  display: flex;
  justify-content: space-between;
  padding: 3px 0px 3px 0px;
}

.mbodyListBox .mbodyListRow .mbodyListLeft {
  width: 6rem;
  height: 3rem;
  text-align: end;
  white-space: nowrap;
  text-overflow: ellipsis;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>