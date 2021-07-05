<?php $linkToProduct = $have_post->guid; ?>

<div class="swiper-slide product-card">
  <div class="product-card__image">
    <a href="<?php echo $linkToProduct ?>">
      <picture>
        <source srcset="<?php the_field('webp', $have_post->ID)?>" type="image/webp">
        <?php echo get_the_post_thumbnail( $have_post->ID, 'large', array('alt'=> $have_post->post_title, 'data-product_id' => $have_post->ID)); ?>
      </picture>
    </a>
    <?php if(get_field('product-card__label', $have_post->ID)) :?>
    <span class="product-card__label"><?php the_field('product-card__label',$have_post->ID)?></span>
  <?php endif; ?>
  </div>
  <a href="<?php echo $linkToProduct ?>" class="product-card__title text"><?php echo $have_post->post_title; ?></a>
  <div class="product-card__price title-3">
    <span class="product-card__number"><?php echo get_post_meta($have_post->ID, '_price', true); ?></span>
    <span class="product-card__text"> грн</span>
  </div>
</div>