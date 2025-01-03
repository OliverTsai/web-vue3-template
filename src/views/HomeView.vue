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
}

.bodyBox{
  width: 1200px;
	display: flex;
	justify-content: space-between;
}

.bodyListBox{
  display: flex;
  align-items: center;
  font-size: 0.8rem; /*K*/
  padding: 3px 0px 3px 0px; /*K*/

  .bodyListRow{
    display: contents;
  }

  .bodyListLeft{
    text-align:end;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .bodyListRight{
    text-align:start;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .bodyListLive{
    color: red;
  }




}



.bodyListTitle{
  text-align: start;
  display: flex;
  background: #f1f1f1;
  border-radius: 4px;
  padding: 1px 0px 1px 5px;

  .bodyListTitle-fontSize{
    font-size: 0.9rem;
  }
  

  .titleRight{
    display: flex;
    justify-content: center;
  }
}

.pcListX{
  display: flex;
  justify-content: space-between;
}


.ColumnW8{
  width: 8%;
  font-size: 0.8rem;
  .W8-color{
    color: #f60;
  }
}

.ColumnW8.line{
  display: flex;
  gap:0.3rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 1rem;
}

.ColumnW10{
  width: 10%;
  font-size: 0.8rem;
}
.ColumnW16{
  width: 16%;
  font-size: 0.8rem;
}
.ColumnW26{
  width: 26%;
  font-size: 0.8rem;
}
.ColumnW40{
  width: 40%;
  font-size: 0.8rem;
}
.ColumnW52{
  width: 52%;
  font-size: 0.8rem;
}

.ColumnCenter{
  text-align: center;
}


</style>
