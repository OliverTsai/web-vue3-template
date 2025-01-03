<template>
  <div>
    <router-link to="/test">
      Go to Soccer
    </router-link>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// 页面加载时自动跳转到 /soccer
onMounted(() => {
  router.push('/test');
});

</script>

<style lang="scss">

.bodyBd{
  display: flex;
	justify-content: center;
  padding: 20px 10px 0px 10px;
}

.bodyBox{
  width: 1200px;
	display: flex;
	justify-content: space-between;
}

.mbodyTitle{
  display: flex;
  justify-content: space-between;
}

.bodyTitleBox{
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: 0.9rem;
  margin: 5px 0px 5px 0px;

  .btnBox{
    color: #222;
    font-size: 0.9rem;
  }

  .bodyTitleTime{
    padding-left: 1rem;
    box-shadow: -5px 0 6px -5px rgba(0, 0, 0, .2);
  }

  .bodyTitleTime :active{
    color: aqua;
  }
  
}




.mbodyListTitle{
  text-align: start;
}

.mbodyList{
  display: flex;
  flex-direction:column;

  .mbodyListTitle{
    display: flex;
    justify-content: space-between;
    background: #f1f1f1;
    padding: 1px 0.5rem 1px 0.5rem;

    .mbodyListTitleLeft{
      display: flex;
      gap:1rem;

      .leftBox{
        display: flex;
        align-items: center;
      }
    }

    .mbodyListTitleright{
      display: flex;
      align-items: center;
    }
  }
}

.roundedOne {
  width: 28px;
  height: 28px;
  position: relative;
  margin: 3px auto;
  background: #fcfff4;
  background: linear-gradient(to top, #fcfff4 0%, #dfe5d7 40%, #b3bead 100%);
  border-radius: 50px;
  box-shadow: inset 0px 1px 1px white, 0px 1px 3px rgba(0,0,0,0.5);
}

.roundedOne label {
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: absolute;
  left: 4px;
  top: 4px;
  background: #ff0; /* 这里直接使用颜色值 */
  border-radius: 50px;
  box-shadow: inset 0px 1px 1px white, 0px 1px 3px rgba(0,0,0,0.5);
}

.roundedOne label::after {
  content: '';
  width: 16px;
  height: 16px;
  position: absolute;
  top: 2px;
  left: 2px;
  background: linear-gradient(to top, #222 0%, #45484d 100%);
  opacity: 0;
  border-radius: 50px;
  box-shadow: inset 0px 1px 1px rgba(0,0,0,0.5), 0px 1px 0px rgba(255,255,255,1);
}

.roundedOne label:hover::after {
  opacity: 0.3;
}

.roundedOne input[type=checkbox] {
  visibility: hidden;
}

.roundedOne input[type=checkbox]:checked + label::after {
  opacity: 1;
}

.mbodyListLine{
  border-bottom: 1px solid #efefef;
  // margin: 0px 0px 5px 0px;
}

.mbodyListLine:last-child {
  border-bottom: none;
}

.mbodyListBox{
  display: flex;
  // grid-template-columns: repeat(4, 1fr); /* 创建4个等宽的列 */
  // grid-gap: 10px; /* 设置列之间的间距 */
  padding: 2px 1px 2px 1px;
  


  .leftBox{
    display: flex;
    flex-direction:column;
    align-items: start;
  }

  .rightBox{
    display: flex;
    flex-direction:column;
    align-items: end;
    justify-content: center;
    color: red;
  }
  
  .mrightBox{
    display: flex;
    flex-direction:column;
    align-items: end;
    justify-content: center;
    padding-right: 0.5rem;
  }

  .lineBox{
    box-shadow: -5px 0 6px -5px rgba(0, 0, 0, .2);
  }

  .mColumnW18{
    width: 18%;
    font-size: 0.8rem;
  }
  .mColumnW62{
    width: 62%;
    font-size: 0.9rem;
  }
  .mColumnW72{
    width: 72%;
    font-size: 0.8rem;
  }
  .mColumnW10{
    width: 10%;
    font-size: 0.8rem;
  }





}

</style>