<section class="catalog">
  <div class="container">
    <div class="catalog__title title-1">
      <div><?php the_title() ?></div>
      <div class="catalog__title_icon">
        <img src="<?php echo get_template_directory_uri() . '/assets/img/title_decor.svg'?>" alt="">                                                
      </div>
    </div>
    <div class="catalog__wrapper">
        <?php 
         global $post;
         $post_slug = $post->post_name;
        $args = array('product_cat' => $post_slug, 'post_type' => 'product');
        $loop = new WP_Query( $args );	
        ?>
        <?php foreach( $loop->posts as $have_post) : ?>	
          <?php include( locate_template( 'template-parts/content-product-card.php' ) ) ?>	
        <?php endforeach; ?>
        <?php wp_reset_postdata(); ?>
    </div>
  </div>
</section>
1