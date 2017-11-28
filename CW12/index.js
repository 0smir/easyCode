'use strict';
(function () {
//    1 play/pause vido
//    2 изменение громкости
//    3 изменение скорости
//    4 перемотка
//         -по клику по полосе прокрутки
//         -по клику на кнопке скип
//         -по клику на кнопке на клаве право-лево
//         -потянув бегунок
//     5 отображение кол-ва проигранного времени
//     6 сохранение состояния видео при перезагрузке стр.

    /*
     * class Player принимает
     * @param{Object}element
     */


    class Player{
        constructor(element){
            this.palayer = element;
            this.progress = document.querySelector('.progress');
            this.progress_filled = document.querySelector('.progress__filled');
            this.toggle = document.querySelector('.toggle');
            this.skipBtn = document.querySelectorAll('[data-skip]');
            this.ranges = document.querySelectorAll('.player__slider');
        }
        init(){
            //сохраняем контекст
            let self = this;
            this.dom_events(self);
            this.player_events(self);
        }

        /*
         * dom_events() добавляем обработчики событий на элементы управления
         * */
        dom_events(self){
            this.toggle.addEventListener('click', (e) =>{
                this.toggle_play();
            });
            this.ranges.forEach(range =>{
                range.addEventListener('change', function(e) {
                    self.handle_range_update(this);
                });
            });

            this.ranges.forEach(range =>{
                range.addEventListener('mousemove', function(e) {
                    self.handle_range_update(this);
                });
            });
            this.skipBtn.forEach( (btn) =>{
                btn.addEventListener('click', function(e) {
                self.handle_skip(this);
            });
        });
        }

        player_events(self){
            this.palayer.addEventListener('play', (e) =>{
                this.update_toggle_icon();
            });

            this.palayer.addEventListener('pause', (e) =>{
                this.update_toggle_icon();
            });

            this.palayer.addEventListener('timeupdate', (e) =>{

            });
        }

        toggle_play(){
            let method = this.palayer.paused ? 'play' : 'pause';
            this.palayer[method]();
        }

        update_toggle_icon(){
            let icon = this.palayer.paused ? '►' : '❚ ❚';
            this.toggle_play();
        }

        handle_range_update(input){
            this.palayer[input.name];
            console.log(this.palayer[input.name]);
        }
        handle_skip(btn){
            this.palayer.currentTime += parseFloat(btn.dataset.skip);
        }
        handle_progress_update(){
            let percent =(this.palayer.currentTime/this.palayer.duration) * 100;
            this.progress_filled.style.width = `${percent}%`;
        }
        handle_time_update(){

        }
    }

    let videoTag = document.querySelector('.viewer');
    let player = new Player(videoTag);
    player.init();

}());