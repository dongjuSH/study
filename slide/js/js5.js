$(function () {
    var cnt = [0, 0, 0, 0]; //탭버튼
    var slideW = 1200; //슬라이드너비
    var c = 0; //current 현재 슬라이드 변수
  //수정
    cnt[c] = 0; //탭버튼 마다 슬라이드 인덱스번호 할당
    var setId=0;
    var check=false;

    $(".tab-button").each(function (idx) {
        $(this).on({
            click: function () {
                c = idx;
                //cnt 버튼에 해당하는 [c]슬라이드갯수
                pageEventFn(cnt[c]);
                console.log(c,cnt);
                //클릭한 버튼의 idx에 해당하는 패널이 보이게
                $(".slide-view").stop().hide();
                $(".slide-view").eq(c).stop().fadeIn(300);
                //탭버튼활성화
                $(".tab-button").removeClass("addTab");
                $(this).addClass("addTab");
            }
        });
    });

    //페이지 이벤트(탭버튼을 클릭하면 해당 탭버튼의 페이지가 활성화됨)
    function pageEventFn(z) {
        if (z > 4) {
            z = 0;
        }
        if (z < 0) {
            z = 4;
        }
        $(".page-btn").removeClass("addPage");
        $(".page-btn").eq(z).addClass("addPage");
    }

    //슬라이드 이동함수
    function mainSlideFn() {
        $(".slide-wrap")
            .eq(c)
            .stop()
            .animate({ left: -(slideW * cnt[c]) }, 500, function () {
                if (cnt[c] > 4) {
                    cnt[c] = 0;
                }
                if (cnt[c] < 0) {
                    cnt[c] = 4;
                }
                $(".slide-wrap")
                    .eq(c)
                    .stop()
                    .animate({ left: -(slideW * cnt[c]) }, 0);
            });
        pageEventFn(cnt[c]);
    }
    //다음카운트함수
    function nextCountFn() {
            cnt[c]++;
            mainSlideFn();
    }
    //이전카운트함수
    function prevCountFn() {
            cnt[c]--;
            mainSlideFn();
    }

    //좌우 버튼 클릭
    $(".next-btn").on({
        click: function () {
            if(check===false){
                if (!$(".slidewrap").eq(c).is(":animated")) {
                    nextCountFn();
                }
                check=true;
                setTimeout(function (){check=false;},600);
            }

        }
    });

    $(".prev-btn").on({
        click: function () {
            if(check===false){
                if (!$(".slidewrap").eq(c).is(":animated")) {
                    prevCountFn();
                }
                check=true;
                setTimeout(function (){check=false;},600);
            }
        }
    });

    //인디케이터
    $(".page-btn").each(function (idx) {
        $(this).on({
            click: function () {
                //수정
                clearInterval(setId[c]);
                cnt[c] = idx;
                mainSlideFn();
            },
        });
    });
});
