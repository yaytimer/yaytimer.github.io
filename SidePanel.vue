<template>
  <div class="view">
    <div class="page">
      <simple-header title="Side Panel" :back-link="true"></simple-header>
      <content>
        <div class="content-padded">
          <m-button @click="show = true">open side panel</m-button>
        </div>
      </content>
    </div>

    <side-panel :show.sync="show">
      <list>
        <list-item :link="true">
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">Sign in</div>
            </div>
          </div>
        </list-item>

        <list-item :link="true">
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">Sign Up</div>
            </div>
          </div>
        </list-item>

        <list-item :link="true">
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">FAQ</div>
            </div>
          </div>
        </list-item>

        <list-item :link="true">
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">How to improve this?</div>
            </div>
          </div>
        </list-item>

        <list-item :link="true">
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">Spread the words</div>
            </div>
          </div>
        </list-item>
      </list>

    </side-panel>
  </div>
</template>

<script>
import { Button } from '../components/buttons'
import { List, ListItem } from '../components/list'
import Content from '../components/content'
import SidePanel from '../components/side-panel'

export default {
  components: {
    Content,
    SidePanel,
    List,
    ListItem,
    'm-button': Button
  },
  data () {
    return {
      show: false
    }
  }
}
</script>
