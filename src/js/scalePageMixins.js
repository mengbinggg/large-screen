/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2023-02-01 11:01:17
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2024-01-04 10:10:26
 * @Descripttion: 大屏适配的mixins
 */
import _ from 'lodash'

export default {
	data() {
		return {
			targetX: 1920,
			targetY: 1080,
			targetRatio: 16 / 9,
			pageSizeCtr: false  // 是否全屏
		}
	},
	mounted() {
		this.triggerScale()
		window.addEventListener('resize', this.resizeFunc)
		window.addEventListener('fullscreenchange', this.triggerScale);
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.resizeFunc)
		window.removeEventListener('fullscreenchange', this.triggerScale)
	},
	methods: {
		resizeFunc() {
			(_.throttle(() => {
				this.triggerScale()
			}, 100))()
		},
		// 大屏的适配
		triggerScale() {
			// 1.设计稿的尺寸
			let targetX = this.targetX || 1920
			let targetY = this.targetY || 1080
			let targetRatio = this.targetRatio || 16 / 9 // 宽高比率

			// 2.拿到当前设备(浏览器)的宽度
			let currentX = document.documentElement.clientWidth || document.body.clientWidth
			let currentY = document.documentElement.clientHeight || document.body.clientHeight

			// 3.计算缩放比例
			let scaleRatio = currentX / targetX; // 参照宽度进行缩放 ( 默认情况 )
			let currentRatio = currentX / currentY // 宽高比率

			// 超宽屏
			if (currentRatio > targetRatio) {
				// 4.开始缩放网页
				scaleRatio = currentY / targetY // 参照高度进行缩放
				document.body.style = `width:${targetX}px; height:${targetY}px; transform: scale(${scaleRatio}) translateX(-50%); left: 50%;`
			} else {
				// 4.开始缩放网页
				document.body.style = `width:${targetX}px; height:${targetY}px; transform: scale(${scaleRatio}) translateY(-50%); top: 50%;`
			}
		},
		// 全屏
		fullScreen() {
			if (this.pageSizeCtr) {
				if (document.exitFullscreen) {
					document.exitFullscreen()
				} else if (document.msExitFullscreen) {
					document.msExitFullscreen()
				} else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen()
				} else if (document.webkitCancelFullScreen) {
					document.webkitCancelFullScreen()
				}
			} else {
				const d = document.documentElement
				if (d.requestFullscreen) {
					d.requestFullscreen()
				} else if (d.msRequestFullscreen) {
					d.msRequestFullscreen()
				} else if (d.mozRequestFullScreen) {
					d.mozRequestFullScreen()
				} else if (d.webkitRequestFullScreen) {
					d.webkitRequestFullScreen()
				}
			}

			this.pageSizeCtr = !this.pageSizeCtr
		}
	},
}
